import { getProject } from "@/sanity/sanity-utils";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="mt-24 font-bold text-gray-700 text-3xl">
      {project.name}
      <div>
        <a href={project.url}>see the goods</a>
      </div>
    </div>
  );
}
