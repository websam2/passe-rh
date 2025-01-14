import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface ContentCardProps {
	title: string;
	description: string;
	imageUrl: string;
}

export function ContentCard({
	title,
	description,
	imageUrl,
}: ContentCardProps) {
	return (
		<Card className="group cursor-pointer transition-shadow hover:shadow-lg bg-pink-light h-full">
			<div className="h-full flex flex-col">
				<div className="aspect-video relative">
					<img
						src={imageUrl}
						alt={title}
						className="w-full h-full object-cover"
					/>
				</div>
				<CardContent className="flex flex-col flex-1 p-6">
					<div className="flex flex-col gap-2 flex-1">
						<h3 className="font-bold text-xl leading-tight group-hover:text-primary">
							{title}
						</h3>
						<p className="text-sm text-muted-foreground">{description}</p>
					</div>
					<Button
						variant="secondary"
						className="mt-4 w-full bg-purple text-white hover:bg-purple/90"
					>
						<ExternalLink className="h-4 w-4 mr-2" />
						Acessar
					</Button>
				</CardContent>
			</div>
		</Card>
	);
}
