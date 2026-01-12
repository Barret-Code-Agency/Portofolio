
const FILE_CONTENT = {
    'home': {
        name: 'index.js',
        html: `
            <div class="code-view">
                <p><span class="keyword">import</span> { efficiency, scalability } <span class="keyword">from</span> <span class="string">'@fhd/core'</span>;</p>
                <p><span class="keyword">class</span> <span class="variable">DeveloperProfile</span> <span class="keyword">extends</span> <span class="variable">SystemArchitect</span> {</p>
                <p class="indent"><span class="keyword">constructor</span>() {</p>
                <p class="indent2"><span class="keyword">super</span>();</p>
                <p class="indent2"><span class="keyword">this</span>.<span class="property">name</span> = <span class="string">"Fernando Héctor Delgado"</span>;</p>
                <p class="indent2"><span class="keyword">this</span>.<span class="property">mission</span> = <span class="string">"Transforming complex business needs into scalable software"</span>;</p>
                <p class="indent">}</p>
                <p>}</p>
                <p><span class="keyword">export const</span> <span class="variable">fhd</span> = <span class="keyword">new</span> <span class="variable">DeveloperProfile</span>();</p>
            </div>`
    },
    'skills': {
        name: 'skills.ts',
        html: `
            <div class="code-view">
                <p><span class="keyword">export const</span> <span class="variable">Arsenal</span> = {</p>
                <div class="skill-category">FRONTEND</div>
                <div class="skill-bar"><div class="fill" style="width: 95%;">HTML5 / CSS3 / JS ES6+</div> 95%</div>
                <div class="skill-bar"><div class="fill" style="width: 90%;">REACT / RESPONSIVE DESIGN</div> 90%</div>
                <div class="skill-category">BACKEND & CLOUD</div>
                <div class="skill-bar"><div class="fill" style="width: 85%;">NODE.JS / PYTHON / .NET</div> 85%</div>
                <div class="skill-bar"><div class="fill" style="width: 75%;">DOCKER / AWS / AZURE</div> 75%</div>
                <p>};</p>
            </div>`
    },
    'projects': {
        name: 'projects.json',
        html: `<div class="code-view"><p><span class="comment">// Cargando arsenal desde GitHub API...</span></p></div>`
    },
    'contact': {
        name: 'contact.md',
        html: `
            <div class="code-view">
                <p><span class="comment"># PROTOCOLO DE COMUNICACIÓN</span></p>
                <p><span class="keyword">## Canales Oficiales</span></p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:barret.code.agency@gmail.com" class="string">"barret.code.agency@gmail.com"</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/fernando-h%C3%A9ctor-delgado-a6492330b/" target="_blank" class="string">"linkedin.com/in/fdelgado"</a></li>
                </ul>
                <p style="color: #4ade80;">STATUS: READY_FOR_PROJECTS (GMT-3)</p>
            </div>`
    }
}; // UN SOLO CIERRE PARA TODO EL OBJETO

// 2. MOTOR DE RENDERIZADO
function renderEditor(target) {
    const data = FILE_CONTENT[target];
    const editor = document.getElementById('editor-content');
    const tabName = document.getElementById('current-tab-name');

    if (data && editor) {
        tabName.innerText = data.name;
        editor.innerHTML = data.html;
        document.querySelector('.file.active')?.classList.remove('active');
        document.querySelector(`[data-target="${target}"]`)?.classList.add('active');
    }
}

// 3. LISTENERS DEL EXPLORADOR
document.querySelectorAll('.file').forEach(file => {
    file.addEventListener('click', () => {
        const target = file.getAttribute('data-target');
        renderEditor(target);
    });
});

// 4. INTEGRACIÓN CON GITHUB API
async function loadGithub() {
    try {
        const res = await fetch('https://api.github.com/users/Barret-Code-Agency/repos?sort=updated');
        const repos = await res.json();
        FILE_CONTENT['projects'].html = `
            <div class="code-view">
                <p>{</p>
                ${repos.slice(0, 5).map(r => `
                    <p class="indent"><span class="property">"${r.name}"</span>: <a href="${r.html_url}" target="_blank" class="string">"view_source"</a>,</p>
                `).join('')}
                <p class="indent"><span class="property">"Nave_Negocios"</span>: <a href="https://bsc3120.github.io/Examen-parcial/" target="_blank" class="string">"LIVE_DEMO"</a></p>
                <p>}</p>
            </div>`;
    } catch (e) {
        FILE_CONTENT['projects'].html = `<div class="code-view"><p class="string">Error: GitHub API offline.</p></div>`;
    }
}

// 5. LÓGICA DE LA TERMINAL (UNIFICADA)
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = e.target.value.toLowerCase().trim();
        const line = document.createElement('div');
        line.innerHTML = `<span class="prompt">fhd@portfolio:~$</span> ${input}`;
        terminalOutput.appendChild(line);

        if (input === 'ls' || input === 'projects') renderEditor('projects');
        else if (input === 'contact') renderEditor('contact');
        else if (input === 'clear') terminalOutput.innerHTML = '';
        else if (input === 'help') {
            const hLine = document.createElement('div');
            hLine.style.color = "#858585";
            hLine.innerText = "Comandos: [ls, projects, contact, deploy, clear, help]";
            terminalOutput.appendChild(hLine);
        }
        else if (input === 'deploy') {
            const steps = ["Sincronizando...", "Validando Microservicios...", "Status: EXITOSO"];
            steps.forEach((s, i) => setTimeout(() => {
                const sl = document.createElement('div');
                sl.style.color = i === 2 ? "#4ade80" : "#858585";
                sl.innerText = `> ${s}`;
                terminalOutput.appendChild(sl);
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }, i * 600));
        }

        e.target.value = '';
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});

// INICIO DE SERVICIOS
loadGithub();
renderEditor('home');
