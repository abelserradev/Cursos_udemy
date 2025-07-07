'use client';
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  content: string;
}

export default function Home() {

  const [articles, setArticles] = useState<Article[]>([])
  console.log(articles);
  

  useEffect(() =>{
    fetch('http://127.0.0.1:5000/articles')
    .then(response => response.json())
    .then(data => setArticles(data))
    .catch(error => console.log('Error al obtener los articulos: ', error));
  }, [])

  return (
    <>
    <Layout>
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
          Ultimos articulos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grip-cols-3 gap-8">
          {
            articles.map((article) =>(
              <div key={article.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-indigo-600 mb-2">{article.title}</h2>
                <p className="text-black">{article.content.slice(0, 100)}...</p>
                <Link href={`/article/${article.id}`}>
                  <span className="text-indigo-600 font-semibold hover:text-indigo-400">Leer más</span>
                </Link>
              </div>
            ))
          }

        </div>
      </div>
    </Layout>
    </>
  );
}
