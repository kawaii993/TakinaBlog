// 项目数据配置文件
// 用于管理项目展示页面的数据

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: 'web' | 'mobile' | 'desktop' | 'other';
	techStack: string[];
	status: 'completed' | 'in-progress' | 'planned';
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: 'takina-blog',
		title: 'Takina Blog Theme',
		description: '基于Astro框架开发的现代化博客主题，支持多语言、暗黑模式、响应式设计等功能。',
		image: '',
		category: 'web',
		techStack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Svelte'],
		status: 'completed',
		liveDemo: 'https://home.takinablog.top',
		sourceCode: 'https://github.com/kawaii993/TakinaBlog',
		startDate: '2024-01-01',
		endDate: '2024-06-01',
		featured: true,
		tags: ['Blog', 'Theme', 'Open Source']
	},
	{
		id: 'philia093-website',
		title: 'Personal Portfolio Philia093',
		description: '个人文字网站，展示项目经验和技术技能，整合提取主站博客内容。',
		image: '',
		category: 'web',
		techStack: ['React', 'Next.js', 'TypeScript', 'Framer Motion'],
		status: 'completed',
		liveDemo: 'https://philia.takinablog.top',
		sourceCode: 'https://github.com/kawaii993/Takina-PhiLia093',
		startDate: '2025-07-01',
		endDate: '2025-08-01',
		featured: true,
		tags: ['Portfolio', 'React', 'Blog']
	},
	{
		id: 'MoonTV',
		title: 'Video website MoonTV',
		description: '多端同步视频集合播放平台。',
		image: '',
		category: 'mobile',
		techStack: ['React Native', 'TypeScript', 'Redux', 'Firebase'],
		status: 'completed',
		liveDemo: 'https://tv.takinablog.top/',
		startDate: '2024-12-01',
		tags: ['Mobile', 'Video']
	},
	{
		id: 'site-status',
		title: 'Visualization Tool site-status',
		description: '网站状态可视化网站，监测Takina旗下运行中的大部分网站。',
		image: '',
		category: 'web',
		techStack: ['Vue.js', 'D3.js', 'TypeScript', 'Node.js'],
		status: 'completed',
		liveDemo: 'https://status.takinablog.top/',
		startDate: '2023-06-01',
		endDate: '2023-11-01',
		tags: ['Data Visualization', 'Analytics', 'Charts']
	},
	{
		id: 'game-community-dashboard',
		title: 'Game Community Dashboard',
		description: '一款面向游戏运营的社区管理与数据分析工具，支持玩家活跃度追踪、活动数据统计、反馈收集与舆情监控。',
		image: '',
		category: 'web',
		techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
		status: 'in-progress',
		startDate: '2025-08-21',
		tags: ['GameOps', 'Community', 'Analytics', 'Player Engagement']
	}

];

// 获取项目统计信息
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(p => p.status === 'completed').length;
	const inProgress = projectsData.filter(p => p.status === 'in-progress').length;
	const planned = projectsData.filter(p => p.status === 'planned').length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned
		}
	};
};

// 按分类获取项目
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === 'all') {
		return projectsData;
	}
	return projectsData.filter(p => p.category === category);
};

// 获取特色项目
export const getFeaturedProjects = () => {
	return projectsData.filter(p => p.featured);
};

// 获取所有技术栈
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach(project => {
		project.techStack.forEach(tech => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};