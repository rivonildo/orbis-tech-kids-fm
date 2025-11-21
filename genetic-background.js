// Sistema ML com Efeito Gangorra e Múltiplos FELIZ NATAL
console.log('🎄 Iniciando Sistema ML com Efeito Gangorra...');

class GeneticBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.textGroups = []; // Array para múltiplos FELIZ NATAL
        this.squares = [];
        this.population = [];
        this.generation = 0;
        this.bestPositions = [];
        this.frameCount = 0;
        
        // Parâmetros do algoritmo genético
        this.populationSize = 50;
        this.mutationRate = 0.1;
        this.crossoverRate = 0.7;
        
        // Parâmetros do efeito gangorra
        this.swingSpeed = 0.03;
        this.swingIntensity = 15;
        
        this.init();
    }

    init() {
        // Configurar canvas
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.95';
        document.body.appendChild(this.canvas);

        this.resize();
        this.initializeGeneticAlgorithm();
        this.createMultipleTextGroups();
        this.create3DElements();
        this.animate();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.initializeGeneticAlgorithm();
        this.createMultipleTextGroups();
        this.create3DElements();
    }

    initializeGeneticAlgorithm() {
        this.population = [];
        this.bestPositions = [];
        
        for (let i = 0; i < this.populationSize; i++) {
            this.population.push(this.createRandomIndividual());
        }
        
        this.evaluateFitness();
        console.log(`🧬 Geração ${this.generation} inicializada`);
    }

    createRandomIndividual() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            scale: Math.random() * 0.5 + 0.5,
            rotation: Math.random() * Math.PI * 2,
            colorScheme: Math.floor(Math.random() * 5),
            pulsePattern: Math.random() * 2 + 1,
            fitness: 0
        };
    }

    evaluateFitness() {
        this.population.forEach(individual => {
            let fitness = 0;
            
            const borderDistance = Math.min(
                individual.x,
                this.canvas.width - individual.x,
                individual.y,
                this.canvas.height - individual.y
            );
            fitness += borderDistance * 0.1;
            
            const centerX = this.canvas.width / 2;
            const centerY = this.canvas.height / 2;
            const distanceFromCenter = Math.sqrt(
                Math.pow(individual.x - centerX, 2) + 
                Math.pow(individual.y - centerY, 2)
            );
            fitness += (this.canvas.width - distanceFromCenter) * 0.05;
            
            let overlapPenalty = 0;
            this.population.forEach(other => {
                if (other !== individual) {
                    const distance = Math.sqrt(
                        Math.pow(individual.x - other.x, 2) + 
                        Math.pow(individual.y - other.y, 2)
                    );
                    if (distance < 100) overlapPenalty += (100 - distance);
                }
            });
            fitness -= overlapPenalty * 0.1;
            
            individual.fitness = Math.max(0, fitness);
        });
        
        this.population.sort((a, b) => b.fitness - a.fitness);
        this.bestPositions = this.population.slice(0, 8).map(ind => ({
            x: ind.x,
            y: ind.y,
            fitness: ind.fitness
        }));
    }

    createMultipleTextGroups() {
        this.textGroups = [];
        
        // Criar 3 grupos de FELIZ NATAL em posições estratégicas
        const positions = [
            { x: this.canvas.width * 0.3, y: this.canvas.height * 0.2 },  // Topo esquerda
            { x: this.canvas.width * 0.7, y: this.canvas.height * 0.5 },  // Centro direita
            { x: this.canvas.width * 0.5, y: this.canvas.height * 0.8 }   // Baixo centro
        ];

        positions.forEach((pos, index) => {
            this.textGroups.push(this.createTextGroup("FELIZ NATAL", pos.x, pos.y, index));
        });

        console.log(`🎄 Criados ${this.textGroups.length} grupos de FELIZ NATAL`);
    }

    createTextGroup(text, centerX, centerY, groupIndex) {
        const letters = [];
        const squareSize = 18; // Um pouco menor para múltiplos textos
        const rows = 5;
        const letterWidth = 3;

        const letterPatterns = {
            'F': [ [1,1,1], [1,0,0], [1,1,0], [1,0,0], [1,0,0] ],
            'E': [ [1,1,1], [1,0,0], [1,1,0], [1,0,0], [1,1,1] ],
            'L': [ [1,0,0], [1,0,0], [1,0,0], [1,0,0], [1,1,1] ],
            'I': [ [1,1,1], [0,1,0], [0,1,0], [0,1,0], [1,1,1] ],
            'Z': [ [1,1,1], [0,0,1], [0,1,0], [1,0,0], [1,1,1] ],
            ' ': [ [0,0,0], [0,0,0], [0,0,0], [0,0,0], [0,0,0] ],
            'N': [ [1,0,1], [1,1,1], [1,0,1], [1,0,1], [1,0,1] ],
            'A': [ [0,1,0], [1,0,1], [1,1,1], [1,0,1], [1,0,1] ],
            'T': [ [1,1,1], [0,1,0], [0,1,0], [0,1,0], [0,1,0] ]
        };

        const totalWidth = text.length * (letterWidth + 1) * squareSize;
        const startX = centerX - totalWidth / 2;
        const startY = centerY - (rows * squareSize) / 2;

        for (let charIndex = 0; charIndex < text.length; charIndex++) {
            const char = text[charIndex];
            const pattern = letterPatterns[char] || letterPatterns[' '];
            
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < letterWidth; col++) {
                    if (pattern[row][col] === 1) {
                        letters.push({
                            x: startX + (charIndex * (letterWidth + 1) * squareSize) + (col * squareSize),
                            y: startY + (row * squareSize),
                            baseX: startX + (charIndex * (letterWidth + 1) * squareSize) + (col * squareSize),
                            baseY: startY + (row * squareSize),
                            size: squareSize,
                            baseColor: this.get3DColor(groupIndex, charIndex, row),
                            pulseSpeed: Math.random() * 0.04 + 0.02,
                            phase: Math.random() * Math.PI * 2,
                            depth: Math.random() * 20 + 5,
                            rotation3D: Math.random() * 0.2 - 0.1,
                            swingPhase: Math.random() * Math.PI * 2, // Fase individual da gangorra
                            swingSpeed: Math.random() * 0.02 + 0.01 // Velocidade individual
                        });
                    }
                }
            }
        }

        return {
            letters: letters,
            centerX: centerX,
            centerY: centerY,
            groupIndex: groupIndex,
            globalSwingPhase: Math.random() * Math.PI * 2 // Fase global do grupo
        };
    }

    create3DElements() {
        this.squares = [];
        const squareSize = 25;
        const cols = Math.ceil(this.canvas.width / squareSize);
        const rows = Math.ceil(this.canvas.height / squareSize);

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                this.squares.push({
                    x: col * squareSize,
                    y: row * squareSize,
                    size: squareSize,
                    color: this.getGeneticColor(col, row),
                    pulseSpeed: Math.random() * 0.03 + 0.01,
                    phase: Math.random() * Math.PI * 2,
                    depth: Math.random() * 15,
                    rotation3D: Math.random() * 0.3 - 0.15,
                    brightness: Math.random() * 0.4 + 0.3
                });
            }
        }
    }

    get3DColor(groupIndex, charIndex, row) {
        const colorSchemes = [
            ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'], // Vibrante
            ['#FF9FF3', '#F368E0', '#FF9F43', '#EE5A24', '#00D2D3'], // Neon
            ['#54A0FF', '#5F27CD', '#00D2D3', '#10AC84', '#EE5A24'], // Azul/Laranja
            ['#FF9FF3', '#FAD02E', '#E84393', '#6C5CE7', '#00B894'], // Rosa/Verde
            ['#FD79A8', '#E17055', '#00B894', '#0984E3', '#6C5CE7']  // Pastel
        ];
        
        const scheme = colorSchemes[(groupIndex + this.generation) % colorSchemes.length];
        return scheme[(charIndex + row) % scheme.length];
    }

    getGeneticColor(col, row) {
        const schemes = [
            ['#0033A0', '#FF8C00', '#00A859', '#7B42F6', '#00D4FF'],
            ['#FF0000', '#00FF00', '#FFFF00', '#FF00FF', '#00FFFF'],
            ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
            ['#6C5CE7', '#FD79A8', '#FDCB6E', '#E17055', '#00B894']
        ];
        
        const scheme = schemes[(col + row + this.generation) % schemes.length];
        return scheme[(col * row) % scheme.length];
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.frameCount++;

        // Evoluir a cada 8 segundos
        if (this.frameCount % 480 === 0) {
            this.evolvePopulation();
            this.createMultipleTextGroups();
        }

        // Atualizar fases da gangorra
        this.textGroups.forEach(group => {
            group.globalSwingPhase += this.swingSpeed;
        });

        // Animar fundo
        this.squares.forEach(square => {
            square.phase += square.pulseSpeed;
            const pulse = (Math.sin(square.phase) + 1) / 2;
            
            const scale = 1 + (square.depth / 100) * pulse;
            const rotation = square.rotation3D * pulse;
            
            this.ctx.save();
            this.ctx.translate(square.x + square.size/2, square.y + square.size/2);
            this.ctx.rotate(rotation);
            this.ctx.scale(scale, scale);
            
            this.ctx.globalAlpha = square.brightness * (0.3 + pulse * 0.4);
            this.ctx.fillStyle = square.color;
            this.ctx.fillRect(-square.size/2, -square.size/2, square.size, square.size);
            
            this.ctx.globalAlpha = pulse * 0.3;
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.fillRect(-square.size/4, -square.size/4, square.size/2, square.size/2);
            
            this.ctx.restore();
        });

        // Animar múltiplos FELIZ NATAL com efeito gangorra
        this.textGroups.forEach(group => {
            group.letters.forEach(letter => {
                letter.phase += letter.pulseSpeed;
                letter.swingPhase += letter.swingSpeed;
                
                const pulse = (Math.sin(letter.phase) + 1) / 2;
                
                // EFEITO GANGORRA - Vertical e Horizontal
                const verticalSwing = Math.sin(letter.swingPhase + group.globalSwingPhase) * this.swingIntensity;
                const horizontalSwing = Math.cos(letter.swingPhase * 0.7 + group.globalSwingPhase) * (this.swingIntensity * 0.8);
                
                // Posição com gangorra
                const currentX = letter.baseX + horizontalSwing;
                const currentY = letter.baseY + verticalSwing;
                
                // Efeito 3D
                const depthEffect = 1 + (letter.depth / 50) * pulse;
                const rotation = letter.rotation3D * pulse;
                
                this.ctx.save();
                this.ctx.translate(currentX + letter.size/2, currentY + letter.size/2);
                this.ctx.rotate(rotation);
                this.ctx.scale(depthEffect, depthEffect);
                
                const currentColor = this.adjustColorML(letter.baseColor, pulse, this.generation);
                
                this.ctx.globalAlpha = 0.9;
                this.ctx.fillStyle = currentColor;
                this.ctx.fillRect(-letter.size/2, -letter.size/2, letter.size, letter.size);
                
                // Efeito de luz
                if (pulse > 0.6) {
                    this.ctx.globalAlpha = (pulse - 0.6) * 0.8;
                    this.ctx.fillStyle = '#FFFFFF';
                    this.ctx.fillRect(-letter.size/3, -letter.size/3, letter.size/1.5, letter.size/1.5);
                }
                
                this.ctx.restore();
            });
        });

        // Desenhar informações do sistema
        this.drawSystemInfo();

        requestAnimationFrame(() => this.animate());
    }

    evolvePopulation() {
        const newPopulation = [];
        
        const eliteCount = Math.floor(this.populationSize * 0.2);
        for (let i = 0; i < eliteCount; i++) {
            newPopulation.push({...this.population[i]});
        }
        
        while (newPopulation.length < this.populationSize) {
            const parent1 = this.selectParent();
            const parent2 = this.selectParent();
            const child = this.crossover(parent1, parent2);
            this.mutate(child);
            newPopulation.push(child);
        }
        
        this.population = newPopulation;
        this.evaluateFitness();
        this.generation++;
        
        console.log(`🧬 Geração ${this.generation} - Melhor fitness: ${this.population[0].fitness.toFixed(2)}`);
    }

    selectParent() {
        const totalFitness = this.population.reduce((sum, ind) => sum + ind.fitness, 0);
        let random = Math.random() * totalFitness;
        
        for (const individual of this.population) {
            random -= individual.fitness;
            if (random <= 0) return individual;
        }
        
        return this.population[0];
    }

    crossover(parent1, parent2) {
        if (Math.random() > this.crossoverRate) {
            return Math.random() > 0.5 ? {...parent1} : {...parent2};
        }
        
        return {
            x: (parent1.x + parent2.x) / 2,
            y: (parent1.y + parent2.y) / 2,
            scale: (parent1.scale + parent2.scale) / 2,
            rotation: (parent1.rotation + parent2.rotation) / 2,
            colorScheme: Math.random() > 0.5 ? parent1.colorScheme : parent2.colorScheme,
            pulsePattern: (parent1.pulsePattern + parent2.pulsePattern) / 2,
            fitness: 0
        };
    }

    mutate(individual) {
        if (Math.random() < this.mutationRate) {
            individual.x += (Math.random() - 0.5) * 100;
            individual.y += (Math.random() - 0.5) * 100;
        }
        if (Math.random() < this.mutationRate) {
            individual.scale = Math.random() * 0.5 + 0.5;
        }
        if (Math.random() < this.mutationRate) {
            individual.colorScheme = Math.floor(Math.random() * 5);
        }
    }

    adjustColorML(baseColor, pulse, generation) {
        let r = parseInt(baseColor.substr(1, 2), 16);
        let g = parseInt(baseColor.substr(3, 2), 16);
        let b = parseInt(baseColor.substr(5, 2), 16);
        
        const mlModulation = Math.sin(generation * 0.1) * 50;
        const pulseModulation = pulse * 80;
        
        r = Math.max(0, Math.min(255, r + mlModulation + pulseModulation));
        g = Math.max(0, Math.min(255, g - mlModulation + pulseModulation));
        b = Math.max(0, Math.min(255, b + mlModulation - pulseModulation));
        
        return `#${Math.round(r).toString(16).padStart(2, '0')}${Math.round(g).toString(16).padStart(2, '0')}${Math.round(b).toString(16).padStart(2, '0')}`;
    }

    drawSystemInfo() {
        this.ctx.globalAlpha = 0.1;
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`🧬 Geração: ${this.generation}`, this.canvas.width - 10, 20);
        this.ctx.fillText(`🎯 Fitness: ${this.population[0]?.fitness.toFixed(2) || 0}`, this.canvas.width - 10, 35);
        this.ctx.fillText(`🎄 Textos: ${this.textGroups.length}`, this.canvas.width - 10, 50);
    }
}

// Inicialização
function initializeMLSystem() {
    try {
        new GeneticBackground();
        console.log('🚀 Sistema ML com Gangorra e Múltiplos Textos inicializado!');
    } catch (error) {
        console.error('❌ Erro no sistema ML:', error);
    }
}

// Iniciar quando pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMLSystem);
} else {
    initializeMLSystem();
}