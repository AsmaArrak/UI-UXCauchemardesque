const pages = ['page1', 'page2', 'page3','page4']; 

export const getRandomPage = () => {
  const randomIndex = Math.floor(Math.random() * pages.length);
  return pages[randomIndex];
};
