const apiKey =
  "UmAs0yO3QOcNFifKuk2GlkMD6PToW7ypo9ZNAVTzGWfeo2sbmtKCF-3QYD91Z9TUDEYY3T5RveM6AczoAS5VOvsDPXPAlGcNj1mDvUHhm_F39a6XjLInIW_KLqiJX3Yx";
const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          jsonResponse.businesses.map((business) => {
            return {
              id: business["id"],
              imageSrc: business["image_url"],
              name: business["name"],
              address: business["location"]["address1"],
              city: business["location"]["city"],
              state: business["location"]["state"],
              zipCode: business["location"]["zip_code"],
              //'category': business[0]['title'],
              rating: business["rating"],
              reviewCount: business["review_count"],
            };
          });
        }
      });
  },
};

export default Yelp;
