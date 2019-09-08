import jsonschema
import argparse
import json
import traceback

parser = argparse.ArgumentParser(description="Json Schema Validator")

parser.add_argument("--schema", type = str, required = True, help = "Schema file", action = "store")
parser.add_argument("--json", type = str, required = True, help = "JSON file", action = "store")

args = parser.parse_args()

schema = json.loads(open(args.schema, "r").read())
instance = json.loads(open(args.json, "r").read())

try:
  jsonschema.validate(instance = instance, schema = schema)
  print("Validation successful.")
except jsonschema.ValidationError as e:
  print("Validation not successful.")
  decision = raw_input("Print error? [Y/n] ").strip()
  if(decision == "n" or decision == "N"):
    pass
  else:
    print(e)