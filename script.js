// 监听首页的提交按钮
const submitBtn = document.getElementById("submitBtn");
if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        const nameInput = document.getElementById("nameInput").value.trim();
        if (nameInput) {
            localStorage.setItem("userName", nameInput); // 存储用户姓名
            window.location.href = "welcome.html"; // 跳转到欢迎页面
        } else {
            alert("请输入您的姓名！");
        }
    });
}

// 处理欢迎页面的显示
const welcomeMessage = document.getElementById("welcomeMessage");
if (welcomeMessage) {
    const storedName = localStorage.getItem("userName"); // 获取存储的姓名
    if (storedName) {
        welcomeMessage.textContent = `欢迎，${storedName}！`;
    } else {
        welcomeMessage.textContent = "欢迎！请返回输入您的姓名。";
    }
}

// 监听清除数据的按钮
const clearBtn = document.getElementById("clearBtn");
if (clearBtn) {
    clearBtn.addEventListener("click", function () {
        localStorage.removeItem("userName"); // 清除存储的数据
        window.location.href = "index.html"; // 返回首页
    });
}