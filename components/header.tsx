import { Button } from "@/components/ui/button";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
	const [searchInput, setSearchInput] = useState("");
	const [recentSearches, setRecentSearches] = useState<string[]>([]);

	return (
		<header className="w-full">
			<div className="container mx-auto">
				<div className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm filter z-50">
					<div className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-4 px-4">
						<Link href="/" className="flex flex-col items-center sm:mb-0">
							<h1 className="text-xl sm:text-2xl font-bold text-orange">
								Passe lá
							</h1>
							<h1 className="text-xl sm:text-2xl font-bold text-orange">
								no RH
							</h1>
						</Link>

						{/* Menu para desktop */}
						<nav className="hidden sm:flex items-center space-x-6">
							<Link
								href="/"
								className="text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-primary"
							>
								Central de Ajuda
							</Link>
							<Link
								href="/"
								className="text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-primary"
							>
								Falar com o Suporte
							</Link>
							<Link
								href="/"
								className="text-sm relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-orange after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:text-primary"
							>
								Sobre nós
							</Link>
						</nav>

						{/* Menu para mobile */}
						<Sheet>
							<SheetTrigger
								asChild
								className="sm:hidden absolute top-4 right-4"
							>
								<Button variant="ghost" size="icon">
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent>
								<nav className="flex flex-col space-y-4 mt-6">
									<Link href="/" className="text-sm hover:text-primary">
										Central de Ajuda
									</Link>
									<Link href="/" className="text-sm hover:text-primary">
										Falar com o Suporte
									</Link>
									<Link href="/" className="text-sm hover:text-primary">
										Sobre nós
									</Link>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
				<div className="container mx-auto relative">
					<div className="py-48 text-center relative">
						<FlickeringGrid
							className="absolute inset-0 -z-10"
							squareSize={5}
							gridGap={10}
							color="#88399d"
							maxOpacity={0.05}
							flickerChance={0.7}
						/>
						<h1 className="text-4xl font-bold mb-8">
							Encontre a sua vaga de emprego
						</h1>
						<div className="max-w-2xl mx-auto">
							<div className="flex gap-2">
								<Input
									type="text"
									placeholder="Digite um cargo"
									className="w-full bg-background"
									value={searchInput}
									onChange={(e) => setSearchInput(e.target.value)}
								/>
								<Select defaultValue="registro">
									<SelectTrigger className="w-[180px] bg-background">
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
									{recentSearches.map((search) => (
										<Button
											key={`recent-search-${search}`}
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
			</div>
		</header>
	);
}
