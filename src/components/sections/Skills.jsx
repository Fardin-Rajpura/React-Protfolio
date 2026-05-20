import React from 'react';
import { skills } from '../../data/Skills';
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Skills = () => {

    // Categorize Skills

    const skillCategories = {
        'Frontend Development': [
            skills.find((s) => s.name === 'React.js'),
            skills.find((s) => s.name === 'Next.js'),
            skills.find((s) => s.name === 'JavaScript'),
            skills.find((s) => s.name === 'HTML/CSS'),
            skills.find((s) => s.name === 'Tailwind CSS'),
            skills.find((s) => s.name === 'Redux Toolkit'),
            skills.find((s) => s.name === 'Framer Motion'),
        ].filter(Boolean),

        'Backend & APIs': [
            skills.find((s) => s.name === 'Node.js'),
            skills.find((s) => s.name === 'Express.js'),
            skills.find((s) => s.name === 'REST APIs'),
            skills.find((s) => s.name === 'JWT Auth'),
        ].filter(Boolean),

        'Database & Tools': [
            skills.find((s) => s.name === 'MongoDB'),
            skills.find((s) => s.name === 'MySQL'),
            skills.find((s) => s.name === 'Git'),
            skills.find((s) => s.name === 'GitHub'),
            skills.find((s) => s.name === 'Vercel'),
            skills.find((s) => s.name === 'Postman'),
            skills.find((s) => s.name === 'AWS'),
        ].filter(Boolean),
    };

    // Get Performance Percentage

    const getProficiencyLevel = (level) => {
        const levels = {
            Expert: 95,
            Advanced: 80,
            Intermediate: 65,
            Beginner: 45,
        };

        return levels[level] || 50;
    };

    // Get Level Color

    const getLevelColor = (level) => {
        const colors = {
            Expert:
                'text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30',

            Advanced:
                'text-cyan-400 bg-cyan-500/20 border-cyan-500/30',

            Intermediate:
                'text-emerald-400 bg-emerald-500/20 border-emerald-500/30',

            Beginner:
                'text-orange-400 bg-orange-500/20 border-orange-500/30',
        };

        return (
            colors[level] ||
            'text-gray-400 bg-gray-500/20 border-gray-500/30'
        );
    };

    return (
        <section
            id='skills'
            className='relative py-20 bg-black overflow-hidden'
        >
            {/* Background Glow */}

            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute top-1/4 left-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full opacity-50'></div>

                <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full opacity-50'></div>
            </div>

            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                {/* Section Header */}

                <FadeIn delay={100}>
                    <div className='text-center mb-16'>

                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/10  mb-6'>
                            <Icons.Sparkles className='w-4 h-4 text-primary' />

                            <span className='text-sm text-primary font-medium tracking-[0.5px]'>
                                My Expertise
                            </span>
                        </div>

                        <h2 className='text-4xl lg:text-5xl font-normal text-white mb-4'>
                            Skills & Technologies
                        </h2>

                        <p className='max-w-2xl mx-auto text-white/60 text-lg'>
                            A comprehensive overview of my technical skills,
                            tools, and technologies I use to build modern web
                            applications.
                        </p>
                    </div>
                </FadeIn>

                {/* Skill Categories */}

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>

                    {Object.entries(skillCategories).map(
                        ([category, categorySkills], categoryIndex) => {
                            return (
                                <FadeIn
                                    key={category}
                                    delay={categoryIndex * 100}
                                >
                                    <div className='relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group'>

                                        {/* Category Header */}

                                        <div className='flex items-center gap-3 mb-6 pb-4 border-b border-white/10 '>
                                            <div className='w-1 h-6 bg-linear-to-b from-primary/30 to-primary/10 rounded-full '></div>
                                            <h3 className='text-xl font-medium text-white'>
                                                {category}
                                            </h3>
                                        </div>

                                        {/* Skills List */}

                                        <div className='space-y-6'>
                                            {categorySkills.map((skill) => {

                                                const IconComponent =
                                                    Icons[skill.icon] ||
                                                    Icons.Code2;

                                                const proficiency =
                                                    getProficiencyLevel(
                                                        skill.level
                                                    );

                                                return (
                                                    <div
                                                        key={skill.id}
                                                        className='space-y-2'
                                                    >

                                                        {/* Top Row */}
                                                        <div className='flex items-center justify-between '>
                                                            <div className='flex items-center gap-3'>
                                                                <div className='p-2 bg-white/5 rounded-lg '>
                                                                    <IconComponent className='w-4 h-4 text-primary' />
                                                                </div>

                                                                <div>
                                                                    <h4 className='text-sm text-white font-medium'>
                                                                        {skill.name}
                                                                    </h4>

                                                                    <p className='text-sm text-white/50'>
                                                                        {skill.expriance}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <span
                                                                className={`text-xs px-3 py-1 rounded-full border ${getLevelColor(
                                                                    skill.level
                                                                )}`}
                                                            >
                                                                {skill.level}
                                                            </span>
                                                        </div>

                                                        {/* Progress Bar */}

                                                        <div className='relative h-1.5 bg-white/5 rounded-full overflow-hidden'>
                                                            <div
                                                                className='absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out'
                                                                style={{
                                                                    width: `${proficiency}%`,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Hover Glow */}

                                        <div className='absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none'></div>
                                    </div>
                                </FadeIn>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;