 import Image from 'next/image';


export default async function App() {
  await new Promise(resolve => setTimeout(resolve, 2000)) 
  return (
 <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md">Test de container</div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md">Test de container</div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md">Test de container</div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md">Test de container</div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md">Test de container</div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md">Test de container</div>
      </div>
  );
}
