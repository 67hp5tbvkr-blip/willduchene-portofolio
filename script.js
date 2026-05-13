body {
margin:0;
background:black;
color:white;
font-family: Arial;
}

.hero {
height:100vh;
position:relative;
overflow:hidden;
}

.hero iframe {
position:absolute;
width:120%;
height:120%;
top:50%;
left:50%;
transform:translate(-50%,-50%);
}

.overlay {
position:absolute;
bottom:60px;
left:60px;
}

.overlay h1 {
font-size:60px;
margin:0;
}

.scroll {
margin-top:20px;
opacity:0.6;
}

.section {
padding:120px 10%;
}

.dark {
background:#0b0b0b;
}

h2 {
font-size:30px;
margin-bottom:30px;
}

.category {
margin-top:40px;
margin-bottom:10px;
opacity:0.7;
text-transform:uppercase;
font-size:12px;
letter-spacing:2px;
}

.row {
display:flex;
gap:15px;
overflow-x:auto;
}

.card {
min-width:280px;
cursor:pointer;
}

.card img {
width:100%;
border-radius:6px;
}

#lightbox {
display:none;
position:fixed;
inset:0;
background:black;
align-items:center;
justify-content:center;
}

#lightbox iframe {
width:85%;
height:80%;
}

#close {
position:absolute;
top:20px;
right:20px;
font-size:30px;
background:none;
border:none;
color:white;
}}

load();
