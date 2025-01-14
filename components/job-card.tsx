import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
	id?: string;
	title: string;
	company: string;
	location: string;
	isRemote: boolean;
	className?: string;
}

export function JobCard({
	id = "1",
	title,
	company,
	location,
	isRemote,
	className = "",
}: JobCardProps) {
	return (
		<Card
			className={`group cursor-pointer transition-shadow hover:shadow-lg bg-pink-light ${className}`}
		>
			<Link href={`/job/${id}`} className="h-full flex flex-col">
				<CardHeader>
					<CardTitle className="text-lg group-hover:text-primary">
						{title}
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col flex-1">
					<div className="flex flex-col gap-2 flex-1">
						<div className="flex items-center gap-2">
							<Building2 className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm">{company}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm">{location}</span>
							{isRemote && <Badge variant="secondary">Remoto</Badge>}
						</div>
					</div>

					<Button
						variant="secondary"
						className="mt-auto w-full bg-purple text-white hover:bg-purple/90"
					>
						<ExternalLink className="mr-2 h-4 w-4" />
						Acessar vaga
					</Button>
				</CardContent>
			</Link>
		</Card>
	);
}
