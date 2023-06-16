import ImageGallery from 'react-image-gallery';
import React from 'react';

const images = [
  {
    original: 'https://images.unsplash.com/photo-1553203911-ba17267172da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1553203911-ba17267172da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1533525377406-a0291a73c21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1533525377406-a0291a73c21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1572409834650-1d536efdc6f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1572409834650-1d536efdc6f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1555774046-9960b8e7c80b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1555774046-9960b8e7c80b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1665904346156-56ca5e414289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1665904346156-56ca5e414289?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1617392847656-10a3744239cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1617392847656-10a3744239cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1635704764831-082c47202c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1635704764831-082c47202c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1445548671936-e1ff8a6a6b20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1445548671936-e1ff8a6a6b20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1457466066908-9c1cfbf05a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1457466066908-9c1cfbf05a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
  },
  {
    original: 'https://images.unsplash.com/photo-1532217635-b45271b1aab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1532217635-b45271b1aab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
  },
];

// async function asyncGetData() {
//   try {
//     const apiCall = await fetch('https://jsonplaceholder.typicode.com/photos');
//     const data = await apiCall.json();
//     console.log('data', data);

//     // for (let i = 0; i < data.length; i++)

//   } catch (error) {
//     console.log('error', error);
//   }
// }
// asyncGetData();


class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}



export default MyGallery;