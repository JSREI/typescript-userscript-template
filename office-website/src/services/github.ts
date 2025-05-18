import axios from 'axios';

// 缓存键
const STAR_COUNT_CACHE_KEY = 'github_star_count_cache';
const CACHE_EXPIRY_KEY = 'github_star_count_cache_expiry';

// 缓存时间为1小时（毫秒）
const CACHE_DURATION = 60 * 60 * 1000;

// 获取仓库的star数量
export async function getRepositoryStarCount(owner: string, repo: string): Promise<number> {
  // 检查缓存是否存在且有效
  const cachedCount = localStorage.getItem(STAR_COUNT_CACHE_KEY);
  const cachedExpiry = localStorage.getItem(CACHE_EXPIRY_KEY);
  
  const now = new Date().getTime();
  
  // 如果缓存存在且未过期，则使用缓存的值
  if (cachedCount && cachedExpiry && now < parseInt(cachedExpiry)) {
    return parseInt(cachedCount);
  }
  
  try {
    // 发送请求获取仓库信息
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
    const starCount = response.data.stargazers_count;
    
    // 更新缓存
    localStorage.setItem(STAR_COUNT_CACHE_KEY, starCount.toString());
    localStorage.setItem(CACHE_EXPIRY_KEY, (now + CACHE_DURATION).toString());
    
    return starCount;
  } catch (error) {
    console.error('获取仓库star数量失败:', error);
    
    // 如果请求失败但缓存存在，则返回缓存的值（即使已过期）
    if (cachedCount) {
      return parseInt(cachedCount);
    }
    
    // 如果完全没有数据，则返回0
    return 0;
  }
} 