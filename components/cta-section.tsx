import { Button } from "@/components/ui/button";

export function CTASection() {
	return (
		<div className="w-full bg-orange text-white">
			<div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
				<div>
					<h2 className="text-2xl font-bold">
						Deixe as empresas te encontrarem!
					</h2>
					<p className="mt-2">
						Ao se cadastrar, você pode receber convites para vagas que
						correspondem ao seu perfil
					</p>
				</div>
				<Button className="bg-purple hover:bg-purple/90 text-white">
					Participar do Portal de Talentos
				</Button>
			</div>
		</div>
	);
}
