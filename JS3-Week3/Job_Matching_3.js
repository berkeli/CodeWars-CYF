/* Job Matching #3
Consider a matchmaking system which asks developers for their skills. This includes all the skills a developer has used in the past, desires to continue to use, and would like to avoid. A candidate has many skills, one may look like this:

{
  name: 'JavaScript',
  experience: 7, // in years 
  preference: 'desired' // could be desired, neutral or avoid
}
On the flip side, the company can create a job with skill requirements. Many companies are just looking for bright developers, so Strive also encourages the use of substitute skills. For example, a company can configure 3 years of JavaScript to substitute for 3 years of CoffeeScript. A job has many skills, one may look like this:

{
  name: 'CoffeeScript',
  idealYears: 3, // in years
  substitutions: [{
    name: 'JavaScript'
  }]
}
A job skill can be satisfied if the candidate's years experience with the skill is greater than or equal to the ideal years. For a valid match, all job skills must be satisfied by the candidate's skills. Additionally, if the candidate desires to use the skill, that skill can recieve a 50% experience boost. However, if the candidate wants to avoid a primary (non-substitute) job skill that a company requires the match is invalid. At that point, there is no need to check for valid substitutions.

Create a method match(candidate, job) that will take a candidate and a job and return a boolean indicating if it is a valid match. */

const match = (candidate, job) => {
    if (candidate.skills.some(e=> job.skills.some(job => job.name === e.name && e.preference === 'avoid'))) return false
    const found = job.skills.every((job)=>{
      const count = candidate.skills.filter(cand => (cand.name === job.name && cand.experience * 1.5 >= job.idealYears) ||
                                       (job.substitutions.some(e => e.name === cand.name) && cand.experience >= job.idealYears))
      return count.length > 0
    })
    return found;
}

// TESTS - run the following command to test this file:
// npm run test -- JS3-Week3/Job_Matching_3.js

const candidate = {
    skills: [{ name: 'CoffeeScript', experience: 3, preference: 'neutral' }]
}
const job = { 
    skills: [{ name: 'CoffeeScript', idealYears: 3, substitutions: [{ name: 'JavaScript' }] }]
}
const candidate1 = { skills:
    [ { name: 'JavaScript', experience: 7, preference: 'neutral' },
      { name: 'Ruby', experience: 7, preference: 'neutral' },
      { name: 'Python', experience: 7, preference: 'neutral' } ] }
const job1 = { skills:
    [ { name: 'JavaScript', idealYears: 3, substitutions: [] },
      { name: 'Ruby', idealYears: 3, substitutions: [] },
      { name: 'Python', idealYears: 3, substitutions: [] } ] }
const candidate2 = { skills:
    [ { name: 'JavaScript', experience: 2, preference: 'desired' },
      { name: 'Ruby', experience: 2, preference: 'desired' },
      { name: 'Python', experience: 2, preference: 'desired' } ] }
const job2 = { skills:
    [ { name: 'JavaScript', idealYears: 3, substitutions: [] },
      { name: 'Ruby', idealYears: 3, substitutions: [] },
      { name: 'Python', idealYears: 3, substitutions: [] } ] }

test('Job Matching #3', () => {
    expect(match(candidate, job)).toBe(true);
    expect(match(candidate1, job1)).toBe(true);
    expect(match(candidate2, job2)).toBe(true);
});