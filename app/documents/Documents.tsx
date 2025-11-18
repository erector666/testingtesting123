import React from 'react';

interface Document {
id: number;
title: string;
date: string;
type: string;
}

interface DocumentsProps {
documents: Document[];
}

function Documents({ documents }: DocumentsProps) {
return (
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
{documents.map((document) => (
<div key={document.id} className='bg-white shadow-md rounded-lg p-4'>
<h2 className='text-xl font-bold mb-2'>{document.title}</h2>
<p className='text-gray-600 mb-1'>Date: {document.date}</p>
<p className='text-gray-600'>Type: {document.type}</p>
</div>
))}
</div>
);
}

export default Documents;
