const apiKey = 'UmAs0yO3QOcNFifKuk2GlkMD6PToW7ypo9ZNAVTzGWfeo2sbmtKCF-3QYD91Z9TUDEYY3T5RveM6AczoAS5VOvsDPXPAlGcNj1mDvUHhm_F39a6XjLInIW_KLqiJX3Yx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
                     {'headers': {
                         'Authorization': `Bearer ${apiKey}`
                     }})
                .then(response => {
                    return response.json();
                })
                .then(jsonResponse => {
                    if (jsonResponse.businesses) {
                        
                    }
                });
    }
};