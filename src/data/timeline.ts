// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // 如果为空表示至今
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
  // Arpg 游戏
  {
    id: "honkai-star-rail",
    title: "崩坏-星穹铁道",
    description: "长期玩家，完成主线剧情、支线任务及所有挑战副本。",
    type: "project",
    startDate: "2023-04-01",
    location: "翁法洛斯",
    skills: ["高难度副本挑战", "角色养成", "活动参与"],
    achievements: [
      "全角色满级培养",
      "完成所有周常活动",
      "累计达成100%主线与支线完成度"
    ],
    icon: "mdi-railroad",
    color: "#FF6B6B",
    featured: true,
  },
  {
    id: "honkai-3",
    title: "崩坏三",
    description: "资深玩家，参与各种活动并完成主要剧情挑战。",
    type: "project",
    startDate: "2021-01-01",
    location: "线上",
    skills: ["角色养成", "活动参与", "副本挑战"],
    achievements: [
      "累计获得全角色满级",
      "完成每日/周常活动",
      "参与所有限时活动"
    ],
    icon: "mdi-sword-cross",
    color: "#F59E0B",
    featured: true,
  },
  {
    id: "genshin-impact",
    title: "原神",
    description: "长期玩家，探索全地图、完成任务与挑战副本。",
    type: "project",
    startDate: "2020-10-01",
    location: "提瓦特大陆",
    skills: ["探索解谜", "角色养成", "活动参与"],
    achievements: [
      "解锁全角色与武器",
      "完成所有秘境挑战",
      "累计活动奖励达成100%"
    ],
    icon: "mdi-star",
    color: "#3B82F6",
    featured: true,
  },
  {
    id: "mingchao",
    title: "鸣潮",
    description: "资深玩家，完成主要剧情和每日活动。",
    type: "project",
    startDate: "2023-03-01",
    location: "线上",
    skills: ["剧情挑战", "角色培养", "活动参与"],
    achievements: [
      "完成主线与支线剧情",
      "解锁全角色成长成就",
      "活跃参与活动收集奖励"
    ],
    icon: "mdi-water",
    color: "#0EA5E9",
    featured: false,
  },

  // MMO 游戏
  {
    id: "yimeng-jianghu",
    title: "一梦江湖",
    description: "资深玩家，完成主线、支线剧情及所有活动副本。",
    type: "work",
    startDate: "2022-07-01",
    endDate: "2023-03-31",
    location: "中国",
    organization: "玩家社区",
    position: "活跃玩家",
    skills: ["副本挑战", "社群互动", "活动参与"],
    achievements: [
      "完成所有节日活动奖励",
      "累计达成全服排行榜前50%",
      "活跃参与社区讨论"
    ],
    icon: "mdi-gamepad-variant",
    color: "#059669",
    featured: true,
  },
  {
    id: "yanyun-shiliusheng",
    title: "燕云十六声",
    description: "长期玩家，参与剧情和各类活动副本。",
    type: "work",
    startDate: "2021-06-01",
    endDate: "2022-06-30",
    location: "中国",
    organization: "玩家社区",
    position: "活跃玩家",
    skills: ["副本挑战", "社群互动", "活动参与"],
    achievements: [
      "完成所有剧情任务",
      "参与社区竞技活动",
      "累计达成全服活动奖励"
    ],
    icon: "mdi-gamepad-variant",
    color: "#FBBF24",
    featured: true,
  },
  {
    id: "nishuihan",
    title: "逆水寒",
    description: "长期玩家，参与各类PVE、PVP活动及社群互动。",
    type: "work",
    startDate: "2021-05-01",
    endDate: "2022-06-30",
    location: "中国",
    organization: "玩家社区",
    position: "活跃玩家",
    skills: ["竞技对战", "剧情探索", "社群参与"],
    achievements: [
      "完成全PVE副本及挑战任务",
      "PVP竞技段位提升至高段",
      "参与社区组织的活动和赛事"
    ],
    icon: "mdi-sword-cross",
    color: "#F59E0B",
    featured: true,
  },

  // FPS 游戏
  {
    id: "apex-legends",
    title: "Apex",
    description: "长期玩家，累计参与竞技比赛与社区活动，积累丰富战斗经验。",
    type: "project",
    startDate: "2020-01-01",
    endDate: "2021-04-30",
    location: "线上",
    skills: ["团队协作", "竞技操作", "赛事参与"],
    achievements: [
      "累计胜场超过200场",
      "参与社区线上赛事",
      "解锁全部角色与装备成就"
    ],
    icon: "mdi-crosshairs",
    color: "#3B82F6",
    featured: false,
  },
  {
    id: "delta-force",
    title: "三角洲",
    description: "资深玩家，参与多人竞技和战术任务。",
    type: "project",
    startDate: "2019-03-01",
    endDate: "2020-12-31",
    location: "线上",
    skills: ["战术竞技", "团队协作", "任务完成"],
    achievements: [
      "完成所有战役任务",
      "在多人竞技中获得前10%",
      "参与线上社区赛事"
    ],
    icon: "mdi-crosshairs",
    color: "#EF4444",
    featured: false,
  },
  {
    id: "fortnite",
    title: "堡垒之夜",
    description: "长期玩家，参与竞技比赛与创意建造活动。",
    type: "project",
    startDate: "2018-06-01",
    endDate: "2019-06-30",
    location: "线上",
    skills: ["竞技操作", "团队协作", "创意建造"],
    achievements: [
      "累计胜场超过150场",
      "完成创意建筑挑战",
      "参与社区活动和赛事"
    ],
    icon: "mdi-gamepad-variant",
    color: "#6366F1",
    featured: false,
  }
];

// 获取时间线统计信息
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取特色时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};





