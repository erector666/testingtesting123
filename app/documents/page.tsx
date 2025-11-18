import React from 'react';
import Documents from './Documents';

const mockDocuments = [
{
id:1,
title: 'Report2023',
date: '2023-12-31',
type: 'PDF',
},
{
id:2,
title: 'Invoice #123',
date: '2024-01-15',
type: 'DOCX',
},
{
id:3,
title: 'Presentation Slides',
date: '2024-02-20',
type: 'PPTX',
},
];

export default function DocumentsPage() {
return (
<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
<Documents documents={mockDocuments} />
</div>
);
}
