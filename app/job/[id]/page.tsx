"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/hooks/use-toast";
import { ChevronLeft, Copy, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JobPage() {
	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.href);
		toast({
			description: "Link copiado para a área de transferência!",
		});
	};

	// In a real app, you would fetch the job details using the ID
	const job = {
		title: "Título da Vaga",
		company: "Empresa",
		location: "São Paulo",
		publishedAt: "14 de janeiro de 2024",
		applicationDeadline: "30 de abril de 2024",
		isRemote: false,
		isPCD: false,
		description: "Inserir",
		requirements: ["Inserir"],
		responsibilities: ["Inserir"],
		benefits: ["Inserir"],
		processSteps: [
			"Cadastro",
			"Avaliação de currículo",
			"Entrevista técnica",
			"Proposta",
		],
	};

	return (
		<div className="min-h-screen bg-slate-50">
			<div className="relative h-64 bg-orange">
				<Image
					src="/banner-image.jpg"
					alt="Banner"
					fill
					className="object-cover opacity-20"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<h1 className="text-4xl font-bold text-white">
						Venha fazer parte da nossa equipe!
					</h1>
				</div>
			</div>

			<div className="container mx-auto py-8">
				<Link
					href="/"
					className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
				>
					<ChevronLeft className="mr-2 h-4 w-4" />
					Voltar para vagas
				</Link>

				<Card className="p-6">
					<div className="max-w-3xl mx-auto">
						<div className="flex items-center justify-between mb-2">
							<h1 className="text-2xl font-bold">{job.title}</h1>
							<Button
								variant="ghost"
								size="icon"
								onClick={copyToClipboard}
								title="Copiar link"
							>
								<Copy className="h-4 w-4" />
							</Button>
						</div>
						<div className="flex items-center gap-2 text-muted-foreground mb-6">
							<span>{job.company}</span>
							<span>•</span>
							<span>{job.location}</span>
							{job.isRemote && (
								<>
									<span>•</span>
									<span>Remoto</span>
								</>
							)}
						</div>

						<div className="mb-4 text-sm text-muted-foreground">
							<p>Publicada em {job.publishedAt}</p>
							<p>Inscrições até {job.applicationDeadline}</p>
							{job.isPCD && <p>Vaga também para PcD</p>}
						</div>

						<div className="prose max-w-none">
							<h2 className="text-lg font-semibold mb-2">Descrição da vaga</h2>
							<p className="mb-6">{job.description}</p>

							<h2 className="text-lg font-semibold mb-2">Requisitos</h2>
							<ul className="list-disc pl-6 mb-8">
								{job.requirements.map((req, index) => (
									<li key={index}>{req}</li>
								))}
							</ul>

							<h2 className="text-lg font-semibold mt-8">Responsabilidades</h2>
							<ul className="list-disc pl-6">
								{job.responsibilities.map((resp, index) => (
									<li key={index}>{resp}</li>
								))}
							</ul>

							<h2 className="text-lg font-semibold mt-8">Benefícios</h2>
							<ul className="list-disc pl-6">
								{job.benefits.map((benefit, index) => (
									<li key={index}>{benefit}</li>
								))}
							</ul>

							<h2 className="text-lg font-semibold mt-8">Etapas do Processo</h2>
							<ol className="list-decimal pl-6">
								{job.processSteps.map((step, index) => (
									<li key={index}>{step}</li>
								))}
							</ol>

							<div className="flex gap-4 mt-8">
								<Button size="lg" className="flex-1 md:flex-none">
									Candidatar-se à vaga
								</Button>
								<Button
									variant="outline"
									size="lg"
									onClick={copyToClipboard}
									className="flex-1 md:flex-none"
								>
									<Copy className="h-4 w-4 mr-2" />
									Copiar link
								</Button>
							</div>
						</div>
					</div>
				</Card>

				<footer className="mt-8 text-center">
					<div className="flex justify-center gap-4 mb-4">
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							<Linkedin className="h-6 w-6" />
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							<Instagram className="h-6 w-6" />
						</Link>
						<Link
							href="#"
							className="text-muted-foreground hover:text-foreground"
						>
							<Facebook className="h-6 w-6" />
						</Link>
					</div>
					<p className="text-sm text-muted-foreground">
						© 2024 Passe lá no RH. Todos os direitos reservados.
					</p>
				</footer>
			</div>

			<Toaster />
		</div>
	);
}
