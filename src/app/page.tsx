 import { ChartAreaAxes } from '@/components/area-chart';
import { CustomBarChart } from '@/components/bar-chart';
import { ChartPieDonutText } from '@/components/pie-chart';
import { TodoList } from '@/components/todo-list';
import Image from 'next/image';


export default async function App() {
  await new Promise(resolve => setTimeout(resolve, 2000)) 
  return (
 <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4 p-4">
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md lg:col-span-2 xl:col-span-1 2xl:col-span-2 "><CustomBarChart/></div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md">Test de container</div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md"><ChartPieDonutText/></div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md"><TodoList/></div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md lg:col-span-2 xl:col-span-1 2xl:col-span-2"><ChartAreaAxes/></div>
    <div className="bg-primary-foreground p-4 rounded-lg shadow-md">Test de container</div>
      </div>
  );
}
