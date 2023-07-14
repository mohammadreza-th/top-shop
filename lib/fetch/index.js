// export const fetchData = async (url) => {
//     const response = await fetch(url);
//     const responseData = await response.json();
//     return responseData;
//  };



export const fetchData = async (url) => {
    const res = await fetch(url)
    const repo = await res.json()
    return { props: { repo } }
  }