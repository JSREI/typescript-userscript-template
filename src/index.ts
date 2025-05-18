import bar from "./bar_module/bar";
import foo from "./foo_module/foo";
import { storeData, retrieveData, registerMenuCommands, makeRequest } from "./gm_api_example/gm_api_usage";

// 基本示例函数
foo();
bar();

// 油猴API使用示例
async function main() {
  console.log("油猴脚本开始运行...");
  
  // 注册菜单命令
  registerMenuCommands();
  
  // 存储数据示例
  storeData("lastRun", new Date().toISOString());
  
  // 读取数据示例
  const lastRun = await retrieveData<string>("lastRun", "从未运行");
  console.log(`上次运行时间: ${lastRun}`);
  
  // API请求示例 (注意：只有在添加了相应的@grant权限后才能工作)
  try {
    // 这里使用一个公开API作为示例
    const data = await makeRequest("https://jsonplaceholder.typicode.com/todos/1");
    console.log("API请求结果:", data);
  } catch (error) {
    console.error("API请求失败:", error);
  }
}

// 运行主函数
main().catch(error => console.error("脚本运行出错:", error));


