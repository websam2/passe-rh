"use client";

import { ContentCard } from "@/components/content-card";
import { CourseCard } from "@/components/course-card";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JobCard } from "@/components/job-card";
import { StatsBanner } from "@/components/stats-banner";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Home() {
	const [activeTab, setActiveTab] = useState<"curso" | "conteudo">("curso");

	const jobs = [
		{
			title: "Título da vaga",
			company: "Empresa",
			location: "São Paulo",
			isRemote: true,
		},
		{
			title: "Título da vaga",
			company: "Stefanini Group",
			location: "Rio de Janeiro",
			isRemote: true,
		},
		{
			title: "Título da vaga",
			company: "Empresa",
			location: "São Paulo",
			isRemote: false,
		},
		{
			title: "Título da vaga",
			company: "Empresa",
			location: "Curitiba",
			isRemote: true,
		},
		{
			title: "Título da vaga",
			company: "Stefanini Group",
			location: "Belo Horizonte",
			isRemote: true,
		},
		{
			title: "Título da vaga",
			company: "Empresa",
			location: "São Paulo",
			isRemote: true,
		},
	];

	const courses = [
		{
			title: "Título da Aula",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
			lessonNumber: 1,
		},
		{
			title: "Título da Aula",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
			lessonNumber: 2,
		},
		{
			title: "Título da Aula",
			description: "Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
			lessonNumber: 3,
		},
		{
			title: "Título da Aula",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
			lessonNumber: 4,
		},
    {
			title: "Título da Aula",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
			lessonNumber: 5,
		},
    {
			title: "Título da Aula",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
			lessonNumber: 6,
		},
    {
			title: "Título da Aula",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
			lessonNumber: 7,
		},
	];

	const contents = [
		{
			title: "Título do Conteúdo",
			description: "Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
		},
		{
			title: "Título do Conteúdo",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
		},
		{
			title: "Título do Conteúdo",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
		},
		{
			title: "Título do Conteúdo",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
		},
    {
			title: "Título do Conteúdo",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
		},
    {
			title: "Título do Conteúdo",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
		},
    {
			title: "Título do Conteúdo",
			description:
				"Descrição",
			imageUrl:
				"https://placehold.co/300x100?text=banner",
		},
	];

	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main>
				<StatsBanner />
				<CTASection />

				<section className="container mx-auto py-12">
					<h2 className="text-2xl font-bold mb-6">Sugestões de vagas</h2>
					<Carousel className="relative">
						<CarouselContent>
							{jobs.map((job, index) => (
								<CarouselItem
									key={index}
									className="basis-[300px] md:basis-[350px]"
								>
									<JobCard {...job} className="h-[250px]" />
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="absolute -left-4" />
						<CarouselNext className="absolute -right-4" />
					</Carousel>
				</section>

				<section className="container mx-auto py-12">
					<Tabs defaultValue="curso" className="w-full">
						<TabsList className="mb-8">
							<TabsTrigger value="curso">Curso</TabsTrigger>
							<TabsTrigger value="conteudo">Conteúdo</TabsTrigger>
						</TabsList>

						<TabsContent value="curso">
							<Carousel>
								<CarouselContent>
									{courses.map((course, index) => (
										<CarouselItem
											key={index}
											className="basis-[300px] md:basis-[350px]"
										>
											<CourseCard {...course} />
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className="absolute -left-4" />
								<CarouselNext className="absolute -right-4" />
							</Carousel>
						</TabsContent>

						<TabsContent value="conteudo">
							<Carousel>
								<CarouselContent>
									{contents.map((content, index) => (
										<CarouselItem
											key={index}
											className="basis-[300px] md:basis-[350px]"
										>
											<ContentCard {...content} />
										</CarouselItem>
									))}
								</CarouselContent>
								<CarouselPrevious className="absolute -left-4" />
								<CarouselNext className="absolute -right-4" />
							</Carousel>
						</TabsContent>
					</Tabs>
				</section>
			</main>
			<Footer />
		</div>
	);
}
