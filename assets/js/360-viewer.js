/**
 * 360° Product Viewer
 * Interactive product rotation viewer for AK Racks
 */

class Product360Viewer {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;

        // Default options
        this.options = {
            images: options.images || [],
            autoRotate: options.autoRotate !== undefined ? options.autoRotate : false,
            autoRotateSpeed: options.autoRotateSpeed || 50,
            dragSpeed: options.dragSpeed || 0.5,
            initialFrame: options.initialFrame || 0,
            responsive: options.responsive !== undefined ? options.responsive : true,
            showControls: options.showControls !== undefined ? options.showControls : true,
            loopRotation: options.loopRotation !== undefined ? options.loopRotation : true,
            ...options
        };

        this.currentFrame = this.options.initialFrame;
        this.totalFrames = this.options.images.length;
        this.isLoaded = false;
        this.isRotating = false;
        this.isDragging = false;
        this.startX = 0;
        this.autoRotateInterval = null;
        this.loadedImages = [];

        this.init();
    }

    init() {
        if (!this.container || this.totalFrames === 0) {
            console.error('360° Viewer: Invalid container or no images provided');
            return;
        }

        this.createViewerHTML();
        this.loadImages();
        this.attachEventListeners();
    }

    createViewerHTML() {
        this.container.classList.add('viewer-360-container');
        this.container.innerHTML = `
            <div class="viewer-360-wrapper">
                <div class="viewer-360-canvas">
                    <img src="" alt="360° Product View" class="viewer-360-image" />
                    <div class="viewer-360-loader">
                        <div class="loader-spinner"></div>
                        <p>Loading 360° View...</p>
                    </div>
                </div>
                ${this.options.showControls ? this.createControlsHTML() : ''}
                <div class="viewer-360-instructions">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span>Drag to rotate</span>
                </div>
            </div>
        `;

        this.imageElement = this.container.querySelector('.viewer-360-image');
        this.loader = this.container.querySelector('.viewer-360-loader');
        this.instructions = this.container.querySelector('.viewer-360-instructions');
    }

    createControlsHTML() {
        return `
            <div class="viewer-360-controls">
                <button class="control-btn rotate-left" title="Rotate Left" aria-label="Rotate Left">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M14 8L10 12L14 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <button class="control-btn auto-rotate" title="Auto Rotate" aria-label="Toggle Auto Rotate">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <button class="control-btn rotate-right" title="Rotate Right" aria-label="Rotate Right">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M10 8L14 12L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
                <button class="control-btn fullscreen" title="Fullscreen" aria-label="Toggle Fullscreen">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M21 8V5C21 3.89543 20.1046 3 19 3H16M16 21H19C20.1046 21 21 20.1046 21 19V16M3 16V19C3 20.1046 3.89543 21 5 21H8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
            <div class="viewer-360-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 0%"></div>
                </div>
                <span class="progress-text">Frame <span class="current-frame">1</span> / <span class="total-frames">${this.totalFrames}</span></span>
            </div>
        `;
    }

    async loadImages() {
        this.loader.style.display = 'flex';
        const promises = this.options.images.map((src, index) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve({ index, img });
                img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
                img.src = src;
            });
        });

        try {
            const results = await Promise.all(promises);
            results.forEach(({ index, img }) => {
                this.loadedImages[index] = img;
            });
            this.isLoaded = true;
            this.showFrame(this.currentFrame);
            this.loader.style.display = 'none';

            // Start auto-rotate if enabled
            if (this.options.autoRotate) {
                this.startAutoRotate();
            }
        } catch (error) {
            console.error('360° Viewer: Error loading images', error);
            this.loader.innerHTML = '<p style="color: var(--error-color, #e74c3c);">Failed to load images</p>';
        }
    }

    showFrame(frameIndex) {
        if (!this.isLoaded || frameIndex < 0 || frameIndex >= this.totalFrames) return;

        this.currentFrame = frameIndex;
        this.imageElement.src = this.loadedImages[frameIndex].src;
        this.updateProgress();

        // Hide instructions after first interaction
        if (this.instructions) {
            this.instructions.style.opacity = '0';
            setTimeout(() => {
                if (this.instructions) this.instructions.style.display = 'none';
            }, 300);
        }
    }

    updateProgress() {
        const progressFill = this.container.querySelector('.progress-fill');
        const currentFrameSpan = this.container.querySelector('.current-frame');

        if (progressFill) {
            const progress = ((this.currentFrame + 1) / this.totalFrames) * 100;
            progressFill.style.width = `${progress}%`;
        }

        if (currentFrameSpan) {
            currentFrameSpan.textContent = this.currentFrame + 1;
        }
    }

    attachEventListeners() {
        const canvas = this.container.querySelector('.viewer-360-canvas');

        // Mouse events
        canvas.addEventListener('mousedown', (e) => this.startDrag(e));
        document.addEventListener('mousemove', (e) => this.drag(e));
        document.addEventListener('mouseup', () => this.endDrag());

        // Touch events
        canvas.addEventListener('touchstart', (e) => this.startDrag(e.touches[0]));
        document.addEventListener('touchmove', (e) => this.drag(e.touches[0]));
        document.addEventListener('touchend', () => this.endDrag());

        // Control buttons
        if (this.options.showControls) {
            const rotateLeft = this.container.querySelector('.rotate-left');
            const rotateRight = this.container.querySelector('.rotate-right');
            const autoRotateBtn = this.container.querySelector('.auto-rotate');
            const fullscreenBtn = this.container.querySelector('.fullscreen');

            if (rotateLeft) rotateLeft.addEventListener('click', () => this.rotateLeft());
            if (rotateRight) rotateRight.addEventListener('click', () => this.rotateRight());
            if (autoRotateBtn) autoRotateBtn.addEventListener('click', () => this.toggleAutoRotate());
            if (fullscreenBtn) fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());
        }
    }

    startDrag(e) {
        this.isDragging = true;
        this.startX = e.clientX || e.pageX;
        this.stopAutoRotate();
        this.container.style.cursor = 'grabbing';
    }

    drag(e) {
        if (!this.isDragging || !this.isLoaded) return;

        const currentX = e.clientX || e.pageX;
        const deltaX = currentX - this.startX;

        if (Math.abs(deltaX) > 5) {
            const framesToMove = Math.floor(Math.abs(deltaX) * this.options.dragSpeed / 10);

            if (framesToMove > 0) {
                if (deltaX > 0) {
                    this.moveFrames(framesToMove);
                } else {
                    this.moveFrames(-framesToMove);
                }
                this.startX = currentX;
            }
        }
    }

    endDrag() {
        this.isDragging = false;
        this.container.style.cursor = 'grab';
    }

    moveFrames(amount) {
        let newFrame = this.currentFrame + amount;

        if (this.options.loopRotation) {
            newFrame = (newFrame + this.totalFrames) % this.totalFrames;
        } else {
            newFrame = Math.max(0, Math.min(this.totalFrames - 1, newFrame));
        }

        this.showFrame(newFrame);
    }

    rotateLeft() {
        this.stopAutoRotate();
        this.moveFrames(-1);
    }

    rotateRight() {
        this.stopAutoRotate();
        this.moveFrames(1);
    }

    startAutoRotate() {
        this.stopAutoRotate();
        const autoRotateBtn = this.container.querySelector('.auto-rotate');
        if (autoRotateBtn) autoRotateBtn.classList.add('active');

        this.autoRotateInterval = setInterval(() => {
            this.moveFrames(1);
        }, this.options.autoRotateSpeed);
    }

    stopAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
            const autoRotateBtn = this.container.querySelector('.auto-rotate');
            if (autoRotateBtn) autoRotateBtn.classList.remove('active');
        }
    }

    toggleAutoRotate() {
        if (this.autoRotateInterval) {
            this.stopAutoRotate();
        } else {
            this.startAutoRotate();
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.container.requestFullscreen().catch(err => {
                console.error('Fullscreen error:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }

    destroy() {
        this.stopAutoRotate();
        this.container.innerHTML = '';
        this.loadedImages = [];
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Product360Viewer;
}
