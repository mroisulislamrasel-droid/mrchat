
// Agora Credentials
const APP_ID = "YOUR_AGORA_APP_ID"; // এখানে আপনার Agora App ID বসাবেন
const CHANNEL = "HiChatParty";

let rtc = {
  client: null,
  localAudioTrack: null,
};

let isMicOn = false;
let userName = "";

// Initialize Agora Client
rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

// Join Room Function
async function joinRoom() {
  userName = document.getElementById("username").value.trim();
  if (!userName) {
    alert("অনুগ্রহ করে আপনার নাম দিন!");
    return;
  }

  try {
    // Join Channel
    await rtc.client.join(APP_ID, CHANNEL, null, null);
    
    // Create & Publish Audio Track
    rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    await rtc.client.publish([rtc.localAudioTrack]);

    document.getElementById("status").innerText = "Connected";
    document.getElementById("status").style.background = "#00b894";
    document.getElementById("mic-btn").disabled = false;
    document.getElementById("leave-btn").disabled = false;
    document.getElementById("join-box").style.display = "none";

    // Occupy Seat 1 for demonstration
    const seat1 = document.getElementById("seat-1");
    seat1.classList.add("active");
    seat1.querySelector("p").innerText = userName;

    addChatMessage("System", `${userName} রুমে প্রবেশ করেছেন।`);

  } catch (error) {
    console.error("Agora Join Error:", error);
    alert("রুমের সাথে কানেক্ট হতে সমস্যা হচ্ছে! (App ID চেক করুন)");
  }
}

// Subscribe to Remote Users
rtc.client.on("user-published", async (user, mediaType) => {
  await rtc.client.subscribe(user, mediaType);
  if (mediaType === "audio") {
    const remoteAudioTrack = user.audioTrack;
    remoteAudioTrack.play();
  }
});

// Toggle Microphone
async function toggleMic() {
  if (isMicOn) {
    await rtc.localAudioTrack.setEnabled(false);
    document.getElementById("mic-btn").innerText = "🔇 মিক অফ";
    isMicOn = false;
  } else {
    await rtc.localAudioTrack.setEnabled(true);
    document.getElementById("mic-btn").innerText = "🎤 মাইক অন";
    isMicOn = true;
  }
}

// Leave Room
async function leaveRoom() {
  if (rtc.localAudioTrack) {
    rtc.localAudioTrack.close();
  }
  await rtc.client.leave();

  location.reload(); // Reload to reset state
}

// Chat System
function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (msg) {
    addChatMessage(userName || "Guest", msg);
    input.value = "";
  }
}

function sendGift(giftName) {
  if (!userName) {
    alert("আগে রুমে জয়েন করুন!");
    return;
  }
  addChatMessage("🎁 GIFT", `${userName} সিটে ${giftName} পাঠিয়েছেন!`, "gift-msg");
}

function addChatMessage(sender, text, customClass = "") {
  const box = document.getElementById("chat-messages");
  const p = document.createElement("p");
  if (customClass) p.classList.add(customClass);
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  box.appendChild(p);
  box.scrollTop = box.scrollHeight;
}
