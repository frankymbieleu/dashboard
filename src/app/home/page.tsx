import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (

 <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="md:w-1/3 bg-blue-100 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Titre 1</h3>
        <p>Contenu de la première colonne</p>
      </div>

      <div className="md:w-1/3 bg-green-100 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Titre 2</h3>
        <p>Contenu de la deuxième colonne</p>
      </div>

      <div className="md:w-1/3 bg-purple-100 p-6 rounded-lg">
        <h3 className="font-bold text-lg mb-2">Titre 3</h3>
        <p>Contenu de la troisième colonne</p>
      </div>
    </div>
    
  );
}
