import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

module.exports = {
    input: 'src/index.tsx',
    output: [
        {
            file: 'lib/bundle.common.js',
            format: 'cjs'
        },
        {
            file: 'lib/bundle.es.js',
            format: 'esm'
        }
    ],
    external: [
        'react',
    ],
    plugins: [
        resolve(),
        babel({
            babelrc: true,
            exclude: 'node_modules/**',
            extensions
        })
    ]
}