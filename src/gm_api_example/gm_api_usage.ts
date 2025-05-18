/**
 * 油猴API使用示例
 * 这个文件展示了如何使用油猴API及其TypeScript类型定义
 */

// 存储数据示例
export function storeData(key: string, value: any): void {
  // 使用GM.setValue或GM_setValue (根据你的@grant声明)
  if (typeof GM !== 'undefined' && GM.setValue) {
    // GM.setValue是Promise形式的API
    GM.setValue(key, value)
      .then(() => console.log(`数据 ${key} 已保存`))
      .catch(err => console.error('保存数据失败:', err));
  } else if (typeof GM_setValue !== 'undefined') {
    // GM_setValue是同步API
    GM_setValue(key, value);
    console.log(`数据 ${key} 已保存`);
  } else {
    console.warn('GM存储API不可用，请检查@grant声明');
  }
}

// 读取数据示例
export async function retrieveData<T>(key: string, defaultValue: T): Promise<T> {
  try {
    // 使用GM.getValue (Promise形式)
    if (typeof GM !== 'undefined' && GM.getValue) {
      return await GM.getValue(key, defaultValue);
    }
    // 使用GM_getValue (同步形式)
    else if (typeof GM_getValue !== 'undefined') {
      return GM_getValue(key, defaultValue);
    }
    // 如果API不可用，返回默认值
    return defaultValue;
  } catch (error) {
    console.error(`读取数据 ${key} 失败:`, error);
    return defaultValue;
  }
}

// 注册菜单示例
export function registerMenuCommands(): void {
  // 检查API可用性
  if (typeof GM_registerMenuCommand !== 'undefined') {
    // 注册菜单项
    GM_registerMenuCommand('设置', () => {
      showSettings();
    });
    
    GM_registerMenuCommand('重置', () => {
      resetSettings();
    });
  } else if (typeof GM !== 'undefined' && GM.registerMenuCommand) {
    GM.registerMenuCommand('设置', () => {
      showSettings();
    });
    
    GM.registerMenuCommand('重置', () => {
      resetSettings();
    });
  } else {
    console.warn('菜单注册API不可用，请检查@grant声明');
  }
}

// XHR请求示例
export async function makeRequest(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    if (typeof GM_xmlhttpRequest !== 'undefined') {
      GM_xmlhttpRequest({
        method: 'GET',
        url: url,
        onload: (response) => {
          if (response.status >= 200 && response.status < 300) {
            try {
              const data = JSON.parse(response.responseText);
              resolve(data);
            } catch (error) {
              resolve(response.responseText);
            }
          } else {
            reject(new Error(`请求失败: ${response.status} ${response.statusText}`));
          }
        },
        onerror: (error) => {
          reject(error);
        }
      });
    } else if (typeof GM !== 'undefined' && GM.xmlHttpRequest) {
      GM.xmlHttpRequest({
        method: 'GET',
        url: url,
        onload: (response) => {
          if (response.status >= 200 && response.status < 300) {
            try {
              const data = JSON.parse(response.responseText);
              resolve(data);
            } catch (error) {
              resolve(response.responseText);
            }
          } else {
            reject(new Error(`请求失败: ${response.status} ${response.statusText}`));
          }
        },
        onerror: (error) => {
          reject(error);
        }
      });
    } else {
      // 回退到普通fetch
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`请求失败: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(resolve)
        .catch(reject);
    }
  });
}

// 辅助函数
function showSettings(): void {
  console.log('显示设置面板');
  // 在这里实现显示设置面板的逻辑
}

function resetSettings(): void {
  console.log('重置设置');
  // 在这里实现重置设置的逻辑
} 