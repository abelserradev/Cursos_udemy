'use client';
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Link from 'next/link';
import Card from "./components/Card";

interface Article {
  id: number;
  title: string;
  content: string;
  img_url: string;
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
              <Card 
              key={article.id} 
              id={article.id} 
              title={article.title} 
              content={article.content}
              img_url={article.img_url}
              />
            ))
          }

        </div>
      </div>
    </Layout>
    </>
  );
}
