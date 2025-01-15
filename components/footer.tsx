import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="w-full bg-[var(--pink-light)] py-8 sm:py-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div>
						<h3 className="font-bold mb-4">Sobre nós</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									O que é a Passe lá no RH?
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Para empresas
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Entrada de Candidatos
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-4">Ajuda</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="/"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Central de Ajuda
								</Link>
							</li>
							<li>
								<Link
									href="/"
									className="text-sm text-muted-foreground hover:text-primary"
								>
									Fale com o Suporte
								</Link>
							</li>
						</ul>
					</div>
					<div className="col-span-2 md:col-span-1">
						<h3 className="font-bold mb-4">Redes sociais</h3>
						<div className="flex space-x-4">
							<Link
								href="https://www.instagram.com/passalanorh_registro/"
								className="text-muted-foreground hover:text-primary"
							>
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="/"
								className="text-muted-foreground hover:text-primary"
							>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link
								href="/"
								className="text-muted-foreground hover:text-primary"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container mx-auto mt-6 sm:mt-8 pt-6 sm:pt-8 border-t px-4">
				<p className="text-sm text-center text-muted-foreground">
					©Passe lá no RH. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
}
