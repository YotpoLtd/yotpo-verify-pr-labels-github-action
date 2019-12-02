const core = require('@actions/core');
const github = require('@actions/github');

const releaseLabels = ['major', 'minor', 'patch']
const labels = github.context.payload.pull_request.labels
const labelNames = labels.map(label => label.name)

console.log('Labels on this pull request are: ' + labelNames)

if (!(releaseLabels.some(releaseLabel => labelNames.includes(releaseLabel)))) {
    core.setFailed('Your pull request should contain one of the release labels: major, minor or patch');
}
