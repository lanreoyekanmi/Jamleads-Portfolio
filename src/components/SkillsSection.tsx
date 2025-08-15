import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, CalendarRange, ClipboardList, Gauge, Landmark, Layers, LineChart, ShieldCheck, Users } from 'lucide-react';
import AOS from 'aos';

type SkillCategory = {
  title: string;
  items: string[];
  icon?: React.ComponentType<any>;
};

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const hardSkills: SkillCategory[] = [
    { title: 'Planning & Scheduling', items: ['Project planning', 'Task scheduling (Gantt, Kanban)', 'Work Breakdown Structure (WBS)', 'Critical Path Method (CPM)'], icon: CalendarRange },
    { title: 'Project Management Methodologies', items: ['Agile (Scrum, Kanban)', 'Waterfall'], icon: Layers },
    { title: 'Budgeting & Cost Management', items: ['Budget estimation', 'Cost control & forecasting', 'Earned Value Management (EVM)'], icon: LineChart },
    { title: 'Risk Management', items: ['Risk assessment & mitigation', 'Contingency planning', 'SWOT analysis'], icon: ShieldCheck },
    { title: 'Resource Management', items: ['Capacity planning', 'Workload balancing', 'Stakeholder coordination'], icon: Users },
    { title: 'Documentation & Reporting', items: ['Project charters & scope', 'Status reporting', 'KPI dashboards'], icon: ClipboardList },
    { title: 'Contract & Procurement', items: ['Vendor negotiation', 'Procurement planning', 'Contract lifecycle'], icon: Landmark },
    { title: 'Compliance & QA', items: ['ISO standards', 'Quality control & testing', 'Regulatory compliance'], icon: CheckCircle2 },
    { title: 'Tools', items: ['MS Project', 'Jira', 'Trello', 'Asana', 'Google Workspace', 'MS Office', 'Slack', 'Zoom'], icon: Gauge }
  ];

  const softSkills: SkillCategory[] = [
    { title: 'Leadership', items: ['Decision-making', 'Delegation', 'Conflict resolution'] },
    { title: 'Communication', items: ['Active listening', 'Negotiation', 'Presentation'] },
    { title: 'Time Management', items: ['Prioritization', 'Task delegation', 'Meeting deadlines'] },
    { title: 'Problem Solving', items: ['Critical thinking', 'Root cause analysis', 'Adaptability'] },
    { title: 'Emotional Intelligence', items: ['Empathy', 'Self-awareness', 'Relationship management'] },
    { title: 'Stakeholder Management', items: ['Persuasion', 'Building relationships', 'Managing expectations'] },
    { title: 'Team Collaboration', items: ['Cross-functional teamwork', 'Coaching & mentoring', 'Motivation'] }
  ];

  // Carousel state for hard and soft skills
  const [hardIndex, setHardIndex] = useState(0);
  const [softIndex, setSoftIndex] = useState(0);
  const hardRef = useRef<HTMLDivElement>(null);
  const softRef = useRef<HTMLDivElement>(null);
  const [hardInView, setHardInView] = useState(false);
  const [softInView, setSoftInView] = useState(false);

  // Fade variant
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.5 } },
  };

  // Intersection Observer for auto-advance
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setHardInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (hardRef.current) observer.observe(hardRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setSoftInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (softRef.current) observer.observe(softRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance logic
  useEffect(() => {
    if (!hardInView) return;
    const interval = setInterval(() => {
      setHardIndex(i => (i + 1) % hardSkills.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [hardInView, hardSkills.length]);

  useEffect(() => {
    if (!softInView) return;
    const interval = setInterval(() => {
      setSoftIndex(i => (i + 1) % softSkills.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [softInView, softSkills.length]);

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto flex flex-col gap-24">
        {/* Hard Skills Block */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Heading left, card right */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#84C41B] inline-block"></span>
              <span className="text-lg font-semibold text-foreground">Skills</span>
            </div>
            <h2 className="text-[3rem] md:text-[6rem] font-bold text-foreground leading-none mb-8">Hard Skills</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center gap-8">
            <div className="relative w-full" ref={hardRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={hardSkills[hardIndex].title}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="bg-card border border-border rounded-2xl p-8 shadow-lg w-full"
                  style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)' }}
                >
                  <div className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                    {hardSkills[hardIndex].title}
                  </div>
                  <div className="text-lg md:text-xl text-muted-foreground">
                    {hardSkills[hardIndex].items.join(', ')}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Soft Skills Block */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-[3rem] md:text-[6rem] font-bold text-foreground leading-none mb-8">Soft Skills</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center gap-8">
            <div className="relative w-full" ref={softRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={softSkills[softIndex].title}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="bg-card border border-border rounded-2xl p-8 shadow-lg w-full"
                  style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)' }}
                >
                  <div className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                    {softSkills[softIndex].title}
                  </div>
                  <div className="text-lg md:text-xl text-muted-foreground">
                    {softSkills[softIndex].items.join(', ')}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


