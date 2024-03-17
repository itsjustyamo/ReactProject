
import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //    <h1>LEASE LINK</h1>
// //     </>
// //   )
// // }

// import { useEffect, useRef, useState } from "react";

// const BASE_URL = "https://jsonplaceholder.typicode.com";

// interface Post {
//   id: number;
//   title: string;
// }

// export default function Demo() {
//   const [error, setError] = useState();
//   const [isLoading, setIsLoading] = useState(false);
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [page, setPage] = useState(0);

//   const abortControllerRef = useRef<AbortController | null>(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       abortControllerRef.current?.abort();
//       abortControllerRef.current = new AbortController();

//       setIsLoading(true);

//       try {
//         const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
//           signal: abortControllerRef.current?.signal,
//         });
//         const posts = (await response.json()) as Post[];
//         setPosts(posts);
//       } catch (e: any) {
//         if (e.name === "AbortError") {
//           console.log("Aborted");
//           return;
//         }

//         setError(e);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [page]);

//   if (error) {
//     return <div>Something went wrong! Please try again.</div>;
//   }

//   return (
//     <div className="tutorial">
//       <h1 className="mb-4 text-2xl">Data Fething in React</h1>
//       <button onClick={() => setPage(page + 1)}>Increase Page ({page})</button>
//       {isLoading && <div>Loading...</div>}
//       {!isLoading && (
//         <ul>
//           {posts.map((post) => {
//             return <li key={post.id}>{post.title}</li>;
//           })}
//         </ul>
//       )}
//     </div>
//   );
// }

// import './App.css';

// import { useEffect, useRef, useState } from "react";

// const BASE_URL = "https://disneyapi.dev";

// export default function App() {
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [characters, setCharacters] = useState([]);
//   const [page, setPage] = useState(1);

//   const abortControllerRef = useRef(null);

//   useEffect(() => {
//     const fetchCharacters = async () => {
//       abortControllerRef.current?.abort();
//       abortControllerRef.current = new AbortController();

//       setIsLoading(true);

//       try {
//         const response = await fetch(`${BASE_URL}/characters?page=${page}`, {
//           signal: abortControllerRef.current?.signal,
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         setCharacters(data.characters);
//       } catch (e) {
//         if (e.name === "AbortError") {
//           console.log("Aborted");
//           return;
//         }
//         setError(e.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCharacters();

//     return () => {
//       abortControllerRef.current?.abort();
//     };
//   }, [page]);

//   if (error) {
//     return "<div>Something went wrong! " + error + ". Please try again.</div>";
//   }

//   return (
//     "<div class='tutorial'>" +
//     "<h1 class='mb-4 text-2xl'>Disney Characters</h1>" +
//     "<button onclick='setPage(page + 1)'>Load More</button>" +
//     (isLoading ? "<div>Loading...</div>" : "") +
//     (!isLoading ?
//       ("<ul>" +
//         characters.map((character) => {
//           return "<li key='" + character.id + "'>" + character.name + "</li>";
//         }).join('') +
//       "</ul>") :
//       "") +
//     "</div>"
//   );
// }



// export default App
import React from 'react';
import Footer from '../components/Footer';
import ImageScrollbar from '../components/ImageScrollbar';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Characters from '../components/Characters';
import SearchFilters from '../components/SearchFilters';

const App = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <Characters />
        <SearchFilters />
      </Layout>
      <ImageScrollbar />
      <Footer />
    </div>
  );
};

export default App
