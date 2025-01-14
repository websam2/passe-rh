import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CourseCardProps {
	title: string;
	description: string;
	imageUrl: string;
	lessonNumber: number;
}

export function CourseCard({
	title,
	description,
	imageUrl,
	lessonNumber,
}: CourseCardProps) {
	return (
		<Card className="group cursor-pointer transition-shadow hover:shadow-lg bg-pink-light h-full">
			<div className="h-full flex flex-col">
				<div className="aspect-video relative bg-[var(--purple)]">
					<img
						src={imageUrl}
						alt={title}
						className="w-full h-full object-cover"
					/>
				</div>
				<CardContent className="flex flex-col flex-1 p-6">
					<div className="flex flex-col gap-2 flex-1">
						<div>
							<p className="text-sm font-medium text-muted-foreground mb-1">
								Aula {lessonNumber}
							</p>
							<h3 className="font-bold text-xl leading-tight group-hover:text-primary">
								{title}
							</h3>
						</div>
						<p className="text-sm text-muted-foreground">{description}</p>
					</div>
					<Button
						variant="secondary"
						className="mt-4 w-full bg-purple text-white hover:bg-purple/90"
					>
						Assistir
					</Button>
				</CardContent>
			</div>
		</Card>
	);
}
