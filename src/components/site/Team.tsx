import vinayak from "@/assets/team/Vinayak.jpeg";
import ashish from "@/assets/team/Ashish.png";
import aditi from "@/assets/team/Aditi.jpeg";
import shifa from "@/assets/team/Shifa.jpeg";
import vatsal from "@/assets/team/Vatsal.jpeg";



const teamMembers = [
{
name: "Vinayak Pandey",
role: "Founder & Chief Executive Officer",
image: vinayak,
description:
"Leading SkillYug Technologies with vision, innovation, and a commitment to delivering impactful technology solutions.",
},
{
name: "Ashish Dubey",
role: "Co-Founder & Chief Operating Officer",
image: ashish,
description:
"Overseeing operations, business development, client relationships, and strategic growth initiatives.",
},
{
name: "Aditi Mall",
role: "Chief Marketing Officer",
image: aditi,
description:
"Driving marketing strategy, brand growth, outreach campaigns, and customer engagement.",
},
{
name: "Shifa Parveen",
role: "Chief Technology Officer",
image: shifa,
description:
"Leading technology development, product architecture, and innovation across digital solutions.",
},
{
name: "Vatsal Varshney",
role: "Social Media Manager",
image: vatsal,
description:
"Managing social media presence, content strategy, audience engagement, and brand visibility.",
},
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Team</h2>
          <p className="text-muted-foreground mt-3">Meet the people behind SkillYug Technologies</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex gap-6 items-start">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">{member.name}</h3>

                  <p className="text-blue-600 font-semibold mt-2">{member.role}</p>

                  <p className="text-gray-600 mt-4 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
