// 1. DATA ESTRUCTURADA: El motor del Arsenal (Sin recortes)
const FILE_CONTENT = {
    'home': {
        name: 'index.js',
        html: `
           <div class="code-view">
                <p><span class="keyword">const</span> <span class="variable">developer</span> = {</p>
                <p class="indent"><span class="property">name</span>: <span class="string">"Fernando Héctor Delgado"</span>,</p>
                <p class="indent"><span class="property">role</span>: <span class="string">"Fullstack Developer"</span>,</p>
                <p class="indent"><span class="property">focus</span>: <span class="string">"Architecture"</span>, <span class="string">"Scalability"</span>,</p>
                <p class="indent"><span class="property">status</span>: <span class="string">"Open for challenges"</span></p>
                <p>};</p>
                <p><span class="keyword">export default</span> <span class="variable">developer</span>;</p>
            </div>`
    },
    'skills': {
        name: 'skills.ts',
        html: `
            <div class="code-view">
                <p><span class="keyword">export const</span> <span class="variable">FullStackArsenal</span> = {</p>
                
                <div class="skill-category">1. FRONTEND CORE</div>
                <div class="skill-bar"><div class="fill" style="width: 95%;">HTML5 / CSS3 / JS ES6+ / React</div> 95%</div>
                
                <div class="skill-category">2. BACKEND SYSTEMS</div>
                <div class="skill-bar"><div class="fill" style="width: 90%;">Node.js / Python / .NET Core</div> 90%</div>
                
                <div class="skill-category">3. BASES DE DATOS</div>
                <div class="skill-bar"><div class="fill" style="width: 85%;">PostgreSQL / MongoDB</div> 85%</div>
                
                <div class="skill-category">4. DEVOPS & INFRA</div>
                <div class="skill-bar"><div class="fill" style="width: 80%;">Git / CI-CD / Docker / AWS / Azure</div> 80%</div>
                
                <div class="skill-category">5. SEGURIDAD</div>
                <div class="skill-bar"><div class="fill" style="width: 85%;">OWASP / JWT / OAuth</div> 85%</div>
                
                <div class="skill-category">6. ARQUITECTURA</div>
                <div class="skill-bar"><div class="fill" style="width: 90%;">Microservicios / Serverless / Caching</div> 90%</div>
                
                <div class="skill-category">7. EXTRAS</div>
                <div class="skill-bar"><div class="fill" style="width: 85%;">Testing / Documentación / UX-UI</div> 85%</div>
                
                <div class="skill-category">8. STRATEGY</div>
                <div class="skill-bar"><div class="fill" style="width: 100%;">System Analysis & Logic</div> 100%</div>
                
                <p>};</p>
            </div>`
    },
    'projects': {
        name: 'projects.json',
        html: `
            <div class="code-view">
                <p><span class="keyword">const</span> <span class="variable">barret_agency_projects</span> = {</p>
                <p class="indent"><span class="property">"Portofolio"</span>: { <span class="string">"repo"</span>: <a href="https://github.com/Barret-Code-Agency/Portofolio" target="_blank">"github"</a>, <span class="string">"status"</span>: <a href="https://barret-code-agency.github.io/Portofolio/" target="_blank" class="string">"LIVE_DEMO"</a> }</p>
                <p class="indent"><span class="property">"Cyrano"</span>: { <span class="string">"repo"</span>: <a href="https://github.com/Barret-Code-Agency/Cyrano" target="_blank">"github"</a>, <span class="string">"status"</span>: <a href="https://barret-code-agency.github.io/Cyrano/" target="_blank" class="string">"LIVE_DEMO"</a> }</p>
                <p class="indent"><span class="property">"Replica-nave"</span>: { <span class="string">"repo"</span>: <a href="https://github.com/Barret-Code-Agency/Replica-nave" target="_blank">"github"</a>, <span class="string">"status"</span>: <a href="https://barret-code-agency.github.io/Replica-nave/" target="_blank" class="string">"LIVE_DEMO"</a> }</p>
                <p class="indent"><span class="property">"AsesorarSeg"</span>: { <span class="string">"repo"</span>: <a href="https://github.com/Barret-Code-Agency/AsesorarSeg" target="_blank">"github"</a>, <span class="string">"status"</span>: <a href="https://barret-code-agency.github.io/AsesorarSeg/" target="_blank" class="string">"LIVE_DEMO"</a> }</p>
                <p class="indent"><span class="property">"Practicas-estudio"</span>: { <span class="string">"repo"</span>: <a href="https://github.com/Barret-Code-Agency/Practicas-de-estudio" target="_blank">"github"</a>, <span class="string">"status"</span>: "DEPLOY"</p>
                <p class="indent"><span class="property">"Nave_Negocios"</span>: { <span class="string">"repo"</span>: <a href="https://github.com/BSC3120/Examen-parcial" target="_blank">"github"</a>, <span class="string">"live"</span>: <a href="https://bsc3120.github.io/Examen-parcial/" target="_blank" class="string">"LIVE_DEMO"</a> }</p>
                <p>};</p>
            </div>`
    },
    'contact': {
        name: 'contact.md',
        html: `
            <div class="code-view">
                <p><span class="comment"># PROTOCOLO DE COMUNICACIÓN</span></p>
                <p><span class="keyword">## Canales Oficiales</span></p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:barret.code.agency@gmail.com" class="string">"barret.code.agency@gmail.com"</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/fernando-h%C3%A9ctor-delgado-a6492330b/" target="_blank" class="string">"in/fdelgado"</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/Barret-Code-Agency" target="_blank" class="string">"Barret-Code-Agency"</a></li>
                    <li><strong>Phome:</strong> <a href="https://web.whatsapp.com/" target="_blank" class="string">"+54 9 11 5116 0252"</a></li>
                </ul>
                <p style="color: #4ade80;">STATUS: READY_FOR_PROJECTS (GMT-3)</p>
            </div>`
    }
};

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

// 4. LÓGICA DE LA TERMINAL
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