 "use client"
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function DashboardPage() {
useEffect(() => {
// Fetch worker data here and update the state
// For now, using dummy data
const workerData = [
{ id:1, lat:51.505, lng: -0.09 },
{ id:2, lat:48.857, lng:2.351 },
];

// You can update the state with workerData here
console.log('Worker data:', workerData);
}, []);

return (
<div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
<h1 className='text-2xl font-bold mb-4'>Worker Tracking Dashboard</h1>
<MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '800px' }}>
<TileLayer attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
{/* Add markers for each worker here */}
</MapContainer>
</div>
);
}
