export const getGifs = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=pH8pt3FPaX8XVkIM3jhPKn4z67e0qSeG&limit=10&q=${ category }`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map( ({ id, title, images }) => (
    {
      id,
      title,
      url: images.downsized_medium.url
    }
  ));
  
  return gifs;

}