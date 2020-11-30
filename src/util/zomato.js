const apikey = "8b7c9f5c783cb7ec8f4b5efc18748284"

const Yelp = {
search(term, location, sortBy) {
 return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
 {
    headers: {
        Authorization: `Bearer ${apiKey}` 
      },   
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if(jsonResponse.businesses) {
        return jsonResponse.businesses.map(((business) => {
              return {  id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.loation.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.loation.zipCode,
                        category: business.category[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                      }        
         }))
      }
    })
}
}
;

export default Yelp;