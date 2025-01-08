const projects = Vue.createApp({
    data() {
      return {
        projects: [], // 用於儲存從伺服器獲取資料
      };
    },
    mounted() {
      // 在 Vue 的生命周期內執行 AJAX 請求
      $.ajax({
        url: "/profolio",
        method: "get",
        dataType: "json",
        success: (results) => {
          this.projects = results; // 更新 Vue 的 data
        },
        error: (error) => {
          console.error("獲取角色資料時出錯:", error);
        },
      });
    },
  });
  
  // 將 Vue 應用掛載到指定元素
projects.mount("#projects");