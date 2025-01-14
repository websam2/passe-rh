import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
	const [searchInput, setSearchInput] = useState("");
	const [recentSearches, setRecentSearches] = useState<string[]>([]);
	return (
		<header className="w-full">
			<div className="container mx-auto">
				<div className="flex items-center justify-between py-4">
					<Link href="/" className="flex flex-col items-center space-x-2">
						<h1 className="text-2xl font-bold text-orange">Passe lá</h1>
						<h1 className="text-2xl font-bold text-orange">no RH</h1>
					</Link>
					<nav className="hidden md:flex items-center space-x-6">
						<Link href="/help" className="text-sm hover:text-primary">
							Central de Ajuda
						</Link>
						<Link href="/support" className="text-sm hover:text-primary">
							Falar com o Suporte
						</Link>
						<Link href="/about" className="text-sm hover:text-primary">
							Sobre nós
						</Link>
					</nav>
				</div>
				<div className="py-12 md:py-24 text-center relative">
					<img
						src="/images/banner-temporario2.png"
						alt="Background decorativo"
						className="absolute inset-0 h-full object-cover opacity-5 -z-10"
					/>
					<h1 className="text-4xl font-bold mb-8">
						Encontre a sua vaga de emprego
					</h1>
					<div className="max-w-2xl mx-auto">
						<div className="flex gap-2">
							<Input
								type="text"
								placeholder="Digite um cargo"
								className="w-full"
								value={searchInput}
								onChange={(e) => setSearchInput(e.target.value)}
							/>
							<Select defaultValue="registro">
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Selecione a cidade" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="registro">Registro</SelectItem>
									<SelectItem value="sete-barras">Sete Barras</SelectItem>
									<SelectItem value="eldorado">Eldorado</SelectItem>
									<SelectItem value="juquia">Juquiá</SelectItem>
								</SelectContent>
							</Select>
							<Button
								type="button"
								variant="default"
								onClick={() => {
									if (searchInput.trim()) {
										setRecentSearches((prev) => [
											searchInput,
											...prev.slice(0, 4),
										]);
									}
								}}
							>
								<Search className="h-4 w-4" />
							</Button>
						</div>
						{recentSearches.length > 0 && (
							<div className="flex items-center gap-2 mt-4">
								<span className="text-sm text-muted-foreground">
									Buscas recentes:
								</span>
								{recentSearches.map((search, index) => (
									<Button
										key={index}
										variant="secondary"
										size="sm"
										onClick={() => setSearchInput(search)}
									>
										{search}
									</Button>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}
