import { useState } from "react";

const RuleInput = ({ onCreateRule, error, setError }) => {
  const [ruleString, setRuleString] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onCreateRule(ruleString);
      setRuleString('');
      setError('');
      
    } catch (error) {
      setError('Failed to create the rule. Please try again.');
    }
  };

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className="w-2/3 mx-auto p-4 bg-black  shadow-xl rounded">
        <h2 className="text-lg font-bold mb-4 text-black bg-white text-center">Create a New Rule</h2>
        {error && (
          <div className="text-red-400 text-sm mb-2">{error}</div>
        )}
        <input
          type="text"
          value={ruleString}
          onChange={(e) => setRuleString(e.target.value)}
          placeholder="Enter a rule"
          className="w-full p-2 pl-10 text-sm mb-2 text-gray-300 bg-white-700 border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded"
        >
          Create Rule
        </button>
      </form>
    </div>
  );
};

export default RuleInput;