import { Button } from "@/components/ui/button";

export function CTASection() {
	return (
		<div className="w-full bg-orange text-background">
			<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
				<div>
					<h2 className="text-2xl md:text-3xl font-bold">
						Deixe as empresas te encontrarem!
					</h2>
					<p className="mt-2 text-sm md:text-base">
						Ao se cadastrar, você pode receber convites para vagas que
						correspondem ao seu perfil
					</p>
				</div>
				<Button className="bg-purple hover:bg-purple/90 text-background w-full md:w-auto px-8">
					Participar do Portal de Talentos
				</Button>
			</div>
		</div>
	);
}
