export const fetchData = async (query,variables) => {
  try {
    return await fetch('https://volleyball-store-123.myshopify.com/api/2021-10/graphql.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      })
    }).then(res => res.json()) 
  } catch (error) {
    console.log(error)
  }
  
}