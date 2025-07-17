import React from "react";
import Link from "next/link";



interface CardProps {
    id: number;
    title: string;
    content: string;
    img_url: string;
}

const Card: React.FC<CardProps> = ({ id, title, content,img_url }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            {
                img_url && (
                    <img src={img_url} alt={title} className="w-full h-48 object-cover"/>
                )
            }
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">{title}</h2>
            <p className="text-black">{content.slice(0, 100)}...</p>
            <div className="p-4 bg-indigo-600 text-center">
                <Link href={`/article/${id}`}>
                    <span className="text-white font-semibold hover:text-gray-300 cursor-pointer">Leer más</span>
                </Link>
            </div>
        </div>
    );
};

export default Card;