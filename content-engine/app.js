const SUPABASE_URL = "https://jtcyeufhvpieyngracpo.supabase.co";
// Using Service Role Key for local preview to ensure full data access
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0Y3lldWZodnBpZXluZ3JhY3BvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3Njk2Mjk1NiwiZXhwIjoyMDkyNTM4OTU2fQ.yoV9_lKyHM5o-69k5HcOppfqIwUhNSMbtA_j2eQzL78";

// Correct initialization to avoid name conflict with the global 'supabase' object
const { createClient } = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_KEY);

// Data state
let introData = null;

async function init() {
    await fetchIntro();
    await fetchResources();
    await fetchQuizzes();
}

async function fetchIntro() {
    const { data, error } = await client
        .from('resources')
        .select('*')
        .eq('category', 'Intro')
        .limit(1)
        .single();

    if (data) {
        introData = data;
        document.getElementById('intro-title').innerText = data.title;
        // Strip HTML for preview
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = data.body_html;
        document.getElementById('intro-preview').innerText = tempDiv.innerText.substring(0, 200) + '...';
    }
}

async function fetchResources() {
    const { data, error } = await client
        .from('resources')
        .select('*')
        .neq('category', 'Intro')
        .order('category');

    const grid = document.getElementById('resources-grid');
    grid.innerHTML = '';

    if (data) {
        data.forEach(res => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-tag">${res.category}</div>
                <div class="thumbnail-placeholder"></div>
                <h3>${res.title}</h3>
                <p>${res.subject || 'General Study'}</p>
                <button class="btn-outline" onclick="viewResourceById('${res.id}')">Open Book</button>
            `;
            grid.appendChild(card);
        });
    }
}

async function fetchQuizzes() {
    const { data, error } = await client
        .from('quizzes')
        .select('*')
        .order('category', { ascending: false });

    const grid = document.getElementById('quizzes-grid');
    grid.innerHTML = '';

    if (data) {
        data.forEach(quiz => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-tag">${quiz.category}</div>
                <h3>${quiz.title}</h3>
                <p>${quiz.total_questions} Questions • ${quiz.subject}</p>
                <button class="btn-outline" onclick="alert('Starting Quiz: ' + '${quiz.title}')">Start Practice</button>
            `;
            grid.appendChild(card);
        });
    }
}

async function viewResourceById(id) {
    const { data, error } = await client
        .from('resources')
        .select('*')
        .eq('id', id)
        .single();
    
    if (data) {
        showModal(data.body_html);
    }
}

function viewResource(type) {
    if (type === 'intro' && introData) {
        showModal(introData.body_html);
    }
}

function showModal(content) {
    const modal = document.getElementById('reader-modal');
    const body = document.getElementById('reader-body');
    body.innerHTML = content;
    modal.style.display = "block";
}

// Modal closing
document.querySelector('.close').onclick = function() {
    document.getElementById('reader-modal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('reader-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

init();
