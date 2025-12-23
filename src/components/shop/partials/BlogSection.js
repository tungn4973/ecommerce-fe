import React from "react";

const BlogSection = () => {
  const posts = [
    { id: 1, title: "Giữ gìn sức khỏe người cao tuổi", link: "/blog/post-1" },
    { id: 2, title: "Hoạt động cộng đồng tại Viện dưỡng lão", link: "/blog/post-2" },
    { id: 3, title: "Hướng dẫn thăm nom an toàn", link: "/blog/post-3" },
  ];

  return (
    <section style={{ backgroundColor: "#f8f8f8", padding: "30px 0" }}>
      <div className="container mx-auto px-4">
        <h3 style={{ margin: "0 0 12px", color: "#222" }}>TIN TỨC &amp; BÀI VIẾT</h3>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 320px" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {posts.map((p) => (
                <li key={p.id} style={{ marginBottom: "8px" }}>
                  <a href={p.link} style={{ color: "#0073e6", textDecoration: "none" }}>
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: "1 1 240px" }}>
            <h4 style={{ margin: "0 0 8px" }}>Liên hệ</h4>
            <p style={{ margin: "0 0 6px" }}>Website: <a href="http://localhost:3000">http://localhost:3000</a></p>
            <p style={{ margin: "0 0 6px" }}>Facebook: <a href="https://facebook.com/holy88/">facebook.com/holy88/</a></p>
            <p style={{ margin: "0 0 6px" }}>Hotline: 0000 000 000</p>
            <p style={{ margin: 0 }}>Địa chỉ: Số... ngõ... Cầu Giấy, Hà Nội</p>
            <p style={{ marginTop: 8 }}>
              <a
                href="https://www.google.com/maps/search/Vi%E1%BB%87n+d%C6%B0%E1%BB%A1ng+l%E1%BA%A1o+ABCD+C%E1%BA%A7u+Gi%E1%BA%A5y+H%C3%A0+N%E1%BB%99i"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#0073e6" }}
              >
                Bản đồ vị trí Viện dưỡng lão ABCD
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
