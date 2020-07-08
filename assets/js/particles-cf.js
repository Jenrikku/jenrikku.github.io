particlesJS({
	particles: {
		number: {
			value: 33,
			density: {
				enable: false,
				value_area: 800,
			},
		},
		color: {
			value: '#a1ffac',
		},
		shape: {
			type: ['edge', 'triangle'],
			stroke: {
				width: 0,
				color: '#d3ffd8',
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: '',
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.6,
			random: false,
			anim: {
				enable: true,
				speed: 0.3,
				opacity_min: 0,
				sync: false,
			},
		},
		size: {
			value: 8,
			random: true,
			anim: {
				enable: true,
				speed: 2,
				size_min: 4,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 200,
			color: '#dffde2',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 12,
			direction: 'none',
			random: true,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'grab',
			},
			onclick: {
				enable: false,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 100,
				line_linked: {
					opacity: 0.4,
				},
			},
			bubble: {
				distance: 800,
				size: 80,
				duration: 2,
				opacity: 0.8,
				speed: 3,
			},
			repulse: {
				distance: 50,
				duration: 0.4,
			},
			push: {
				particles_nb: 1,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
});
